import React from "react";
import NavLinks from "./NavBar/NavLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import Image from "next/image";

function LeftSidebar() {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 left-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 max-sm:hidden lg:w-66.5 dark:shadow-none">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div>
        <Button className="min-h-10.25 w-full rounded-lg bg-zinc-800 px-4 py-3 text-zinc-50 shadow-none" asChild>
          <Link href={ROUTES.SIGN_IN} className="flex gap-1">
            <Image
              src="/assets/icons/user.svg"
              alt="login"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient">Log in</span>
          </Link>
        </Button>

        <Button className="small-medium light-border-2 @utility light-border-2 {
  @apply border-light-700! dark:border-dark-400!;
} " asChild>
          <Link href={ROUTES.SIGN_UP}>
          <Image
              src="/assets/icons/sign-up.svg"
              alt="signup"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient">Sign up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default LeftSidebar;
