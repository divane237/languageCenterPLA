"use server";

import { createSupabaseServerClient } from "../supabase/server";

export async function getStudentData() {
  const supabase = await createSupabaseServerClient();

  const { data: userData, error: authError } = await supabase.auth.getUser();
  const user = userData.user;
  const email = user.email;

  if (!user) {
    return null;
  }
  if (authError) {
    return JSON.stringify({
      error: { authError, message: "User is not authenticated" },
    });
  }

  // Query the database base on the user's ID

  const { data: result, error: fetchError } = await supabase
    .from("students")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (fetchError) {
    return JSON.stringify({
      error: {
        fetchError,
        message: "Data not fetched, check network connectivity",
      },
    });
  }

  const student = { email, ...result };

  return JSON.stringify({ student, error: null });
}

export async function setAvatarImage(firstName, id, userId, avatar) {
  const supabase = await createSupabaseServerClient();

  const folderPath = `${firstName}-${id}-${userId}`;
  const fileName = `${Date.now()}.${avatar.name.split(".").pop()}`;
  const filePath = `${folderPath}/${fileName}`;

  const { error } = await supabase.storage
    .from("ProfilePictures")
    .upload(filePath, avatar);

  if (error) {
    return JSON.stringify({ error });
  }

  return JSON.stringify({ success: true, filePath });
}

export async function getUserSession() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: sessionError,
  } = await supabase.auth.getUser();

  if (user) {
    return JSON.stringify({
      session: true,
      message: "Authenticated user",
    });
  }
  if (!user) {
    return JSON.stringify({ session: false, message: "No user" });
  }
  if (sessionError) {
    return JSON.stringify({
      error: { sessionError, message: "Something went wrong" },
    });
  }
}
