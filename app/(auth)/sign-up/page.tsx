// import { Button } from "../ui/button";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

function SignUp() {
  return (
    <form action="#" className="w-full">
      <h2 className="text-lg font-bold">Sign up</h2>
      <p className="text-xs text-zinc-500">welcome to Qurio</p>
      <div className="mt-5 flex w-full flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="border px-1.5 py-1 text-sm text-zinc-300 outline-0"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email address</label>
          <input
            type="email"
            className="border px-1.5 py-1 text-sm text-zinc-300 outline-0"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="border px-1.5 py-1 text-sm text-zinc-300 outline-0"
          />
        </div>
        <Button className="mb-3">Continue</Button>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href={ROUTES.SIGN_IN} className="text-blue-500">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUp;
