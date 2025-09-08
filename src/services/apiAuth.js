import supabase, { supabaseUrl } from "./supabase";

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) {
    console.error("Full Supabase error object:", error);
    throw new Error(error.message);
  }

  console.log("Signup successful:", data);
  return data;
}

export async function login({ email, password }) {
  console.log("Attempting login for:", email);

  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.error("Full Supabase error object:", error);
    throw new Error(error.message);
  }

  console.log("Login successful:", data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) {
    return null;
  }

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user:", error);
    throw new Error("Unable to fetch user");
  }

  return data?.user;
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // Build the update object properly
  let updateData = {};

  // Handle password update
  if (password) {
    updateData.password = password;
  }

  // Handle user metadata (fullName)
  if (fullName) {
    updateData.data = { fullName };
  }

  // First update: password and/or fullName
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);

  // If no avatar, return the updated user data
  if (!avatar) return data;

  // Handle avatar upload
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) throw new Error(storageError.message);

  // Second update: avatar URL
  const avatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: avatarUrl,
    },
  });
  if (error2) throw new Error(error2.message);

  return updatedUser;
}

// Add logout function
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}
