"use client";

import { AuthForm } from "@/components/forms/AuthForm";
import { signInWithCredentials } from "@/lib/actions/auth.action";
import { SignInSchema } from "@/lib/validation";

function SignIn() {
  return (
    <AuthForm
      FormType={"SIGN_IN"}
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={signInWithCredentials}
    />
  );
}

export default SignIn;
