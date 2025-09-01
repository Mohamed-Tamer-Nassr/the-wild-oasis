import supabase from "./supabase";

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
