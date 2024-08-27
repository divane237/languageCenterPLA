"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const ImageUpload = ({ result }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const fileUploadRef = useRef();
  console.log(result);
  const { student, error } = JSON.parse(result);
  const { firstName, id, defaultAvatarImage } = student;
  console.log(student);

  const handleFileChange = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImage = async () => {
    const uploadedFile = fileUploadRef.current.files[0];
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
        .from("ProfilePictures")
        .upload(filePath, avatar);

      if (error) {
        console.error("Error uploading avatar:", error);
      } else {
        console.log("File uploaded successfully:", filePath);
        setIsUploading(false);
        // setAvatar(null)
      }
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <div className="absolute z-[-1] w-[8rem] h-[8rem] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full overflow-hidden">
        {!avatar ? (
          <Image
            src={defaultAvatarImage}
            alt="default-avatar"
            width={200}
            height={200}
            className="w-[8rem] h-[8rem] object-cover"
          />
        ) : (
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
          className="absolute top-10 text-[0.5rem] w-auto h-6 right-0 px-2 hover:bg-black"
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
