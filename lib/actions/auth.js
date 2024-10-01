"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../supabase/server";

// SignIn

export async function LoginWithEmail(formData) {
  const { email, password } = formData;

  const supabase = await createSupabaseServerClient();
  try {
    // Attempt to sign in the user
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) throw error;
    //
  } catch (error) {
    //   Handle sign-in errors

    return JSON.stringify({
      error,
      message: "Invalid email or password",
    });
  }

  // Revalidate and redirect on successful login
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function signUpNewUser(formData) {
  const { email, password, ...userData } = formData;

  const supabase = await createSupabaseServerClient();

  try {
    const { error: signUpError } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (signUpError) throw signUpError;
  } catch (error) {
    // Handle signup error
    return JSON.stringify({
      error,
      message: "Failed to signup",
    });
  }

  try {
    // Insert user information into the database
    const { error: insertError } = await supabase
      .from("students")
      .insert({ ...userData, email });

    if (insertError) throw insertError;
    //
  } catch (error) {
    // Handle database insertion errors
    return JSON.stringify({
      error,
      message: "Network problem. Data not inserted in the table",
    });
  }

  revalidatePath("/dashboard");

  redirect("/dashboard");
}

export async function Logout() {
  const supabase = await createSupabaseServerClient();

  try {
    // Sign out the user and await completion
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  } catch (error) {
    return JSON.stringify({ error, message: "User was not signed out" });
    //
  }

  // Redirect to the sign-in page after successful sign-out
  revalidatePath("/sign-in");
  redirect("/sign-in");
}
