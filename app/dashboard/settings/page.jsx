import DeleteAccountSection from "@/components/DeleteAccountSection";
import UpdateAddress from "@/components/UpdateAddress";
import { getStudentData } from "@/lib/actions/user";
import React from "react";
const Settings = async () => {
  const response = await getStudentData();

  const { student } = JSON.parse(response);

  return (
    <div className="w-full h-[100dvh] md:w-[80%] lg:w-full bg-black/80 text-white/80 relative">
      <p className="tracking-wider text-center mt-2 lg:mt-3 text-sm font-semibold lg:text-lg">
        Edit Personal Information
      </p>
      {/* Change Address */}
      <UpdateAddress address={student?.address} />
      {/* Delete your account section */}
      <DeleteAccountSection />
    </div>
  );
};

export default Settings;
