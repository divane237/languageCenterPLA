import MobileDashboard from "@/components/MobileDashboard";
import SideBarDashboard from "@/components/SideBarDashboard";
import React from "react";
const Layout = ({ children }) => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col md:flex-row">
        <MobileDashboard />
        <SideBarDashboard />

        {children}
      </div>
    </>
  );
};

export default Layout;
