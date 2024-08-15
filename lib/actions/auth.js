"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../supabase/server";

// SignIn

export async function LoginWithEmail(formData) {
  const { email, password } = formData;

  const supabase = await createSupabaseServerClient();

  // Attempt to sign in the user
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  // Handle sign-in errors
  if (error) {
    // Return a specific error message if email or password is incorrect
    if (error.__isAuthError) {
      return "Email or password is incorrect";
    }
    // Return a generic error message for other errors
    return "An error occurred during login. Please try again.";
  }

  // Revalidate and redirect on successful login
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function signUpNewUser(formData) {
  const { email, password, ...userData } = formData;

  const supabase = await createSupabaseServerClient();

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  // Handle signup error
  if (signUpError) {
    return JSON.stringify({ error: signUpError.message });
  }

  // Insert user information into the database
  const { data: insertData, error: insertError } = await supabase
    .from("students")
    .insert({ ...userData, user_id: signUpData.user.id });

  // Handle database insertion errors
  if (insertError) {
    return JSON.stringify({ error: insertError.message });
  }

  // Return a success response
  return JSON.stringify({
    message: "User signed up and information stored successfully!",
    signUpData,
    insertData,
  });
}

export async function Logout() {
  const supabase = await createSupabaseServerClient();

  // Sign out the user and await completion
  const { error } = await supabase.auth.signOut();

  // Handle potential errors during sign-out
  if (error) {
    console.error("Sign out error:", error);
    return "An error occurred during logout. Please try again.";
  }

  // Redirect to the sign-in page after successful sign-out
  redirect("/sign-in");
}
