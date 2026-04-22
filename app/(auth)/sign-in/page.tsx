"use client";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import ROUTES from "@/constants/routes";
import { AuthForm } from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validation";

function SignIn() {
  return (
    <AuthForm
      FormType={"SIGN_IN"}
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data)=>Promise.resolve({success:true, data})}
    />
  );
}

export default SignIn;
