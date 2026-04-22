// import { Button } from "../ui/button";
"use client"
import { AuthForm } from "@/components/forms/AuthForm";
import { signUpSchema } from "@/lib/validation";
// import { Button } from "@/components/ui/button";
// import ROUTES from "@/constants/routes";
// import Link from "next/link";

function SignUp() {
  return (
    <AuthForm
      FormType={"SIGN_UP"}
      schema={signUpSchema}
      defaultValues={{ name: "", username: "", email: "", password: ""}}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
}

export default SignUp;
