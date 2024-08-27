import MobileDashboard from "@/components/MobileDashboard";
import SideBarDashboard from "@/components/SideBarDashboard";
import SignOut from "@/components/SignOut";
import { getStudentData } from "@/lib/actions/user";

import React from "react";
const Layout = async ({ children }) => {
  const result = await getStudentData();
  const { student, error } = JSON.parse(result);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <MobileDashboard>
        <SignOut label={student?.email} />
      </MobileDashboard>
      <SideBarDashboard student={student}>
        <SignOut label={student?.email} />
      </SideBarDashboard>

      {children}
    </div>
  );
};

export default Layout;
