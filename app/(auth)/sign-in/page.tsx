import Link from "next/link";
import { Button } from "@/components/ui/button";


function SignIn() {
  return (
    <form action="#">
      <h2 className="text-lg font-bold">Sign in</h2>
      <p className="text-xs text-zinc-500">to continue to Qurio</p>
      <div className="flex gap-3 flex-col mt-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email address</label>
          <input type="text" className="border text-sm text-zinc-300 px-1.5 py-1 outline-0" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
          <input type="text" className="border text-sm text-zinc-300 px-1.5 py-1 outline-0" />
        </div>
        <Link href={'#'} className="text-blue-600 text-xs self-end">Forgot password</Link>
        <Button className="mb-3">Continue</Button>
      </div>
    </form>
  );
}

export default SignIn;
