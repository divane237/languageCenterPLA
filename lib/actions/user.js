"use server";

import { createSupabaseServerClient } from "../supabase/server";

export async function getStudentData() {
  let supabase;
  let user;
  let studentData;

  try {
    //
    supabase = await createSupabaseServerClient();

    const { data, error: authError } = await supabase.auth.getUser();

    user = data?.user;
    if (!user) throw new Error("User not authenticated");

    // Check for errors
    if (authError) throw authError;
  } catch (error) {
    return JSON.stringify({
      student: null,
      error,
      message: "User data was not fechted",
    });

    //
  }

  // Query the database base on the user's ID

  try {
    const { data: fetchedStudentData, error: fetchError } = await supabase
      .from("students")
      .select(
        "firstName, lastName, address, identificationDocument, idNumber, dateOfBirth, country, avatarImage, email"
      )
      .eq("user_id", user.id)
      .single();

    // Catch this error
    if (fetchError) throw fetchError;

    studentData = fetchedStudentData;

    //
  } catch (error) {
    return JSON.stringify({
      student: null,
      error,
      message: "Students table was not selected",
    });
    //
  }

  return JSON.stringify({
    student: studentData,
    error: null,
    message: "Successful",
  });
}

// Action to change profile image
export async function setAvatarImage(firstName, id, userId, avatar) {
  const supabase = await createSupabaseServerClient();

  const folderPath = `${firstName}-${id}-${userId}`;
  const fileName = `${Date.now()}.${avatar.name.split(".").pop()}`;
  const filePath = `${folderPath}/${fileName}`;

  const { error: storageError } = await supabase.storage
    .from("ProfilePictures")
    .upload(filePath, avatar);

  if (storageError) {
    return JSON.stringify({
      error: { storageError, message: "File not uploaded" },
    });
  }

  const { error: avatarNameUpdateError } = await supabase
    .from("student")
    .update({ avatarImage: fileName })
    .eq("user_id", user.id)
    .single();

  if (avatarNameUpdateError) {
    return JSON.stringify({
      error: { avatarNameUpdateError, message: "Student table not updated" },
    });
  }

  return JSON.stringify({ success: true, filePath });
}

export async function getUserSession() {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: sessionError,
    } = await supabase.auth.getUser();

    if (sessionError) throw sessionError;

    if (user) {
      return JSON.stringify({
        error: null,
        session: true,
        message: "Authenticated user",
      });
    }

    if (!user) {
      return JSON.stringify({
        error: null,
        session: false,
        message: "No user",
      });
    }

    //
  } catch (error) {
    return JSON.stringify({
      error,
      session: null,
      message: "Something went wrong getting the user",
    });
    //
  }
}

export async function getTutorName() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("tutors").select("title, name");
}

export async function updateAddress(formData) {
  let supabase;
  let user;

  try {
    //

    supabase = await createSupabaseServerClient();

    const { data, error: authError } = await supabase.auth.getUser();

    user = data?.user;

    // Check for errors
    if (authError) throw authError;
  } catch (error) {
    console.log("Error occurred fetching user id");
    return JSON.stringify({
      error,
      message: "User data was not fechted",
    });

    //
  }

  // Update address from  the database base on the user's ID

  try {
    console.log("Updating the database");
    const { error: updateAddressError } = await supabase
      .from("students")
      .update({ address: formData.newAddress })
      .eq("user_id", user.id);

    // Catch this error
    if (updateAddressError) throw updateAddressError;

    //
  } catch (error) {
    return JSON.stringify({
      error,
      message: "Address not updated",
    });
    //
  }

  console.log("Update successful");
  return JSON.stringify({
    error: null,
    message: "Address has been updated",
  });

  //
}
