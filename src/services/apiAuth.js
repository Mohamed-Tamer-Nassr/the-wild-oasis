import supabase from "./supabase";

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

// Add logout function
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}
