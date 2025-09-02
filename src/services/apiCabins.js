import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function deleteCabin(id) {
  if (!id) {
    throw new Error("Cabin ID is required");
  }

  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error("Error deleting cabin:", error);
    throw new Error(`Error deleting cabin: ${error.message}`);
  }
}

export async function createEditCabin(newCabin, id) {
  // Check if image is a URL that starts with supabaseUrl
  const hasImage =
    newCabin.image &&
    typeof newCabin.image === "string" &&
    newCabin.image.startsWith(supabaseUrl);

  // Generate image name - handle both File objects and fallback cases
  const imageName = newCabin.image?.name
    ? `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
    : `${Math.random()}-image.jpg`;

  const imagePath = hasImage
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/Update cabin
  let query = supabase.from("cabins");

  if (!id) {
    // Create new cabin
    const { data, error } = await query
      .insert([{ ...newCabin, image: imagePath }])
      .select()
      .single();

    if (error) {
      console.error("Error creating cabin:", error);
      throw new Error(`Error creating cabin: ${error.message}`);
    }

    // 2. Upload image only if it's a File object (not a URL)
    if (newCabin.image && !hasImage && newCabin.image instanceof File) {
      const { error: uploadError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

      if (uploadError) {
        // Cleanup: delete the cabin if image upload fails
        await supabase.from("cabins").delete().eq("id", data.id);
        console.error("Error uploading image:", uploadError);
        throw new Error(`Error uploading image: ${uploadError.message}`);
      }
    }

    return data;
  } else {
    // Update existing cabin
    const { data, error } = await query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating cabin:", error);
      throw new Error(`Error updating cabin: ${error.message}`);
    }

    // Upload new image if provided and it's a File object (not a URL)
    if (newCabin.image && !hasImage && newCabin.image instanceof File) {
      const { error: uploadError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

      if (uploadError) {
        console.error("Error uploading image:", uploadError);
        throw new Error(`Error uploading image: ${uploadError.message}`);
      }
    }

    return data;
  }
}
