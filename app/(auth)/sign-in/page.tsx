import Link from "next/link";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

function SignIn() {
  return (
    <form action="#" className="w-full">
      <h2 className="text-lg font-bold">Sign in</h2>
      <p className="text-xs text-zinc-500">to continue to Qurio</p>
      <div className="mt-5 flex w-full flex-col gap-3">
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
        <Link href={"#"} className="self-end text-xs text-blue-600">
          Forgot password
        </Link>
        <Button className="mb-3">Continue</Button>
        <p className="text-center text-sm">
          Dont have an account account?{" "}
          <Link href={ROUTES.SIGN_UP} className="text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignIn;
