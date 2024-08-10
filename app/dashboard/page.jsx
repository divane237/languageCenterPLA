import SignOut from "@/components/SignOut";
import { readUserSession } from "@/lib/actions";
import { redirect } from "next/navigation";
import React from "react";
async function Dashboard() {
  return (
    <div>
      Dashboard
      <SignOut />
    </div>
  );
}

export default Dashboard;
