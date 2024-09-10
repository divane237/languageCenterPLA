"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { UserRoundPen } from "lucide-react";

const ImageUpload = ({ firstName, id, userId, avatarImage }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const fileUploadRef = useRef();

  const handleFileChange = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImage = async () => {
    const uploadedFile = fileUploadRef.current.files[0];
    console.log(uploadedFile);
    setAvatar(uploadedFile);
  };

  const saveImage = async () => {
    try {
      setIsUploading(true);
      const supabase = createSupabaseBrowserClient();

      const folderPath = `${firstName}-${id}`;
      const fileName = `${Date.now()}.${avatar.name.split(".").pop()}`;
      const filePath = `${folderPath}/${fileName}`;

      const { error } = await supabase.storage
        .from("avatar")
        .upload(filePath, avatar);

      if (error) {
        console.error("Error uploading avatar:", error);

        return;
      }

      const { error: avatarNameUpdateError } = await supabase
        .from("students")
        .update({ avatarImage: filePath })
        .eq("user_id", userId);

      if (avatarNameUpdateError) {
        console.log("Student avatar name was not updated");
        setIsUploading(false);
      }
      console.log("File uploaded successfully:", filePath);
      setIsUploading(false);
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-h-[8rem]">
      <div className="absolute z-[-1] h-[6.1rem] w-[6.1rem] md:w-[7.5rem] md:h-[7.5rem] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full overflow-hidden">
        {!avatar ? (
          <UserRoundPen
            size={"6rem"}
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white/80"
          />
        ) : (
          // <Image
          //   alt="profile image"
          //   width={100}
          //   height={100}
          //   src={
          //     "https://zffiphjivimynqcdeasd.supabase.co/storage/v1/object/public/ProfilePictures/Divane-6/divanemit.jpg"
          //   }
          //   className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  z-5"
          // />
          <Image
            src={URL.createObjectURL(avatar)}
            alt="profile-picture"
            width={200}
            height={200}
            className="w-[8rem] h-[8rem]"
          />
        )}
      </div>

      <form id="profile-form" encType="multipart/form-data">
        <button
          className="text-3xl font-bold w-[150px] h-[150px] rounded-full z-50 text-sky-800/50 hover:text-sky-800/90"
          type="submit"
          onClick={handleFileChange}
        >
          {!avatar ? "+" : ""}
        </button>

        <input
          type="file"
          id="file"
          accept="image/png, image/jpeg"
          hidden
          ref={fileUploadRef}
          onChange={uploadImage}
        />
      </form>
      {avatar && (
        <Button
          className="absolute bottom-2 left-1/2 -translate-x-1/2  text-[0.5rem] w-auto h-6 right-0 px-2 hover:bg-black"
          onClick={saveImage}
          disabled={isUploading}
        >
          {isUploading ? "Saving..." : "Save"}
        </Button>
      )}
    </div>
  );
};

export default ImageUpload;
