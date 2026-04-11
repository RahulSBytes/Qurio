"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import ROUTES from "@/constants/routes";

function SocialAuth() {
  async function handleSignIn(provider: "github" | "google") {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      toast.error("Sign in failed", {
        description:
          error instanceof Error
            ? error.message
            : "an error occured during sign-up",
        position: "top-right",
      });
    }
  }

  return (
    <div className="h-full w-full">
      <div className="flex-center flex-col gap-2 sm:flex-row">
        <Button
          className="background-dark400_light900 py-3.5"
          onClick={() => handleSignIn("github")}
        >
          <Image
            src="/assets/icons/github.svg"
            alt="github logo"
            width={20}
            height={20}
            className="invert-colors mr-1.5 object-contain"
          />
          <span className="text-primary-100 text-sm">Continue with GitHub</span>
        </Button>

        <Button
          className="background-dark400_light900"
          onClick={() => handleSignIn("google")}
        >
          <Image
            src="/assets/icons/google.svg"
            alt="google logo"
            width={20}
            height={20}
            className="invert-colors mr-1.5 object-contain"
          />
          <span className="text-primary-100 text-sm">Continue with Google</span>
        </Button>
      </div>
    </div>
  );
}

export default SocialAuth;
