import MobileDashboard from "@/components/MobileDashboard";
import SideBarDashboard from "@/components/SideBarDashboard";
import SignOut from "@/components/SignOut";

import React from "react";
const Layout = async ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-[100dvh]">
      <MobileDashboard>
        <SignOut />
      </MobileDashboard>
      <SideBarDashboard>
        <SignOut />
      </SideBarDashboard>

      {children}
    </div>
  );
};

export default Layout;
