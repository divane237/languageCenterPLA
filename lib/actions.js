"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "./supabase/server";

// SignIn

export async function LoginWithEmail(formData) {
  const {
    email,
    password,
    name,
    address,
    dateOfBirth,
    identificationDocument,
    idNumber,
  } = formData;

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function signUpNewUser(formData) {
  const {
    email,
    password,
    name,
    address,
    dateOfBirth,
    identificationDocument,
    idNumber,
  } = formData;

  const supabase = await createSupabaseServerClient();

  const result = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  return JSON.stringify(result);
}

export async function Logout() {
  const supabase = await createSupabaseServerClient();

  supabase.auth.signOut();
  redirect("/sign-in");
}

// export async function readUserSession() {
//   const supabase = await createSupabaseServerClient();

//   const result = supabase.auth.getSession();

//   return result;
// }
