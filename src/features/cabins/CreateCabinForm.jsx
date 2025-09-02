import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal, onSuccess }) {
  // Safe destructuring with fallbacks
  const { id: cabinId, ...cabinValues } = cabinToEdit || {};
  const isEdit = Boolean(cabinId);

  console.log(
    "CreateCabinForm - isEdit:",
    isEdit,
    "cabinId:",
    cabinId,
    "cabinToEdit:",
    cabinToEdit
  );

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEdit ? cabinValues : {},
  });

  const queryClient = useQueryClient();
  const { errors } = formState;

  // Single mutation that handles both create and edit
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ newCabin, id }) => createEditCabin(newCabin, id),
    onSuccess: () => {
      toast.success(
        isEdit ? "Cabin updated successfully" : "Cabin created successfully"
      );
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();

      // Close form/modal after successful operation
      if (onCloseModal) {
        onCloseModal();
      }
      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error) => {
      console.error("Cabin mutation error:", error);
      toast.error(
        `Error ${isEdit ? "updating" : "creating"} cabin: ${error.message}`
      );
    },
  });

  function onSubmit(data) {
    try {
      console.log(
        "Form submission - isEdit:",
        isEdit,
        "cabinId:",
        cabinId,
        "data:",
        data
      );

      // Handle image properly - check if it's a FileList or already a file/URL
      let image;
      if (data.image && data.image.length > 0) {
        // New image file selected
        image = data.image[0];
      } else if (isEdit && cabinToEdit.image) {
        // Keep existing image for edit mode
        image = cabinToEdit.image;
      } else {
        image = null;
      }

      // Prepare cabin data
      const cabinData = {
        name: data.name,
        maxCapacity: Number(data.maxCapacity),
        regularPrice: Number(data.regularPrice),
        discount: Number(data.discount) || 0,
        description: data.description,
        image: image,
      };

      console.log(
        "Submitting cabin data:",
        cabinData,
        "with ID:",
        isEdit ? cabinId : undefined
      );

      // Call mutation with proper parameters
      mutate({
        newCabin: cabinData,
        id: isEdit ? cabinId : undefined,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Error submitting form. Please try again.");
    }
  }

  function onError(errors) {
    console.error("Form validation errors:", errors);
    toast.error("Please fix the form errors before submitting");
  }

  function handleReset() {
    reset();
    if (onCloseModal) {
      onCloseModal();
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Cabin name must be at least 2 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isLoading}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
            max: {
              value: 20,
              message: "Capacity should not exceed 20",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isLoading}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price should be at least $1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isLoading}
          {...register("discount", {
            validate: (value) => {
              const regularPrice = getValues().regularPrice;
              const discountValue = Number(value) || 0;
              const priceValue = Number(regularPrice) || 0;

              return (
                discountValue <= priceValue ||
                "Discount should be less than or equal to regular price"
              );
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          id="description"
          defaultValue=""
          disabled={isLoading}
          {...register("description", {
            required: "This field is required",
            minLength: {
              value: 10,
              message: "Description should be at least 10 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          disabled={isLoading}
          {...register("image", {
            required: isEdit ? false : "Please upload a cabin photo",
            validate: (value) => {
              // Skip validation if editing and no new file selected
              if (isEdit && (!value || value.length === 0)) return true;

              const file = value?.[0];
              if (!file) return "Please select an image file";

              // Check file type
              if (!file.type.startsWith("image/")) {
                return "Please select a valid image file";
              }

              // Check file size (5MB limit)
              if (file.size > 5 * 1024 * 1024) {
                return "Image size should be less than 5MB";
              }

              return true;
            },
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="button"
          onClick={handleReset}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading
            ? isEdit
              ? "Updating..."
              : "Creating..."
            : isEdit
            ? "Update cabin"
            : "Add cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
