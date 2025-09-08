import { useState } from "react";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUpdateUser } from "./useUpdateUser";
import useUser from "./useUser";

function UpdateUserDataForm() {
  const { user } = useUser();

  // Safe destructuring with fallbacks
  const email = user?.email || "";
  const currentFullName = user?.user_metadata?.fullName || "";

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  // Fixed destructuring - use the actual property names returned by the hook
  const { updateUser, isUpdating, error } = useUpdateUser();

  // File validation helper
  const isValidImage = (file) => {
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/webp",
    ];
    const maxSize = 5 * 1024 * 1024; // 5MB

    return file && validTypes.includes(file.type) && file.size <= maxSize;
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName?.trim()) return;

    // Validate avatar if provided
    if (avatar && !isValidImage(avatar)) {
      alert(
        "Please select a valid image file (JPEG, PNG, GIF, WebP) under 5MB"
      );
      return;
    }

    updateUser(
      { fullName: fullName.trim(), avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          setFullName(currentFullName);
          // Clear the file input
          const fileInput = document.getElementById("avatar");
          if (fileInput) fileInput.value = "";
        },
      }
    );
  }

  function handleCancel(e) {
    e.preventDefault();
    setFullName(currentFullName);
    setAvatar(null);
    // Reset file input
    const fileInput = document.getElementById("avatar");
    if (fileInput) fileInput.value = "";
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>

      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={isUpdating}
          id="fullName"
        />
      </FormRow>

      <FormRow label="Avatar image">
        <FileInput
          disabled={isUpdating}
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>

      {error && (
        <FormRow>
          <p style={{ color: "red" }}>Error: {error.message}</p>
        </FormRow>
      )}

      <FormRow>
        <Button onClick={handleCancel} type="button" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating || !fullName?.trim()}>
          {isUpdating ? "Updating..." : "Update account"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
