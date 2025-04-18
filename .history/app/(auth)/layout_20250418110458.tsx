import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  // Optional debug log (remove in production)
  console.log("User Authenticated:", isUserAuthenticated);

  // Redirect authenticated users away from auth pages
  if (isUserAuthenticated) {
    redirect("/");
  }

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
