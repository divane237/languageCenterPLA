import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") | null;
  const next = searchParams.get("next") ?? "/";

  // Added these lines
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = next;
  redirectTo.searchParams.delete("token_hash");
  redirectTo.searchParams.delete("type");
  //

  if (token_hash && type) {
    const supabase = createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      // redirect user to specified redirect URL or root of app
      redirectTo.searchParams.delete("next"); // Added this
      return NextResponse.redirect(redirectTo); // Added this
      redirect(next);
    }
  }

  // redirect the user to an error page with some instructions
  redirectTo.pathname = "/error"; // added this
  return NextResponse.redirect(redirectTo); // added this
  // redirect("/error");
}
