"use client";

import { AuthForm } from "@/components/forms/AuthForm";
import { signUpWithCredentials } from "@/lib/actions/auth.action";
import { signUpSchema } from "@/lib/validation";

const SignUp = () => (
  <AuthForm
    FormType="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{ username: "", name: "", email: "", password: "" }}
    onSubmit={signUpWithCredentials}
  />
);

export default SignUp;