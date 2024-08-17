"use server";

import { createSupabaseServerClient } from "../supabase/server";

export async function studentData() {
  const supabase = await createSupabaseServerClient();

  const { data: userData, error: authError } = await supabase.auth.getUser();
  const user = userData.user;
  const email = user.email;

  if (!user) {
    return null;
  }

  // Query the database basedon the user's ID

  const { data: result, error: fetchError } = await supabase
    .from("students")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (fetchError) {
    return JSON.stringify(fetchError);
  }

  const student = { email, ...result };

  return JSON.stringify(student);
}
