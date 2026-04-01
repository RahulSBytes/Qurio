import SocialAuth from "@/components/forms/SocialAuth";
import { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="px-8  flex-center w-full h-full ">
      <div className="flex-center flex-col gap-4 border p-10 border-zinc-500">
        <div>
          <span className="text-primary-500 text-2xl font-semibold">Q</span>urio
        </div>
        {/* <h2 className="text-2xl font-semibold">Welcome to Qurio</h2> */}
        {children}
        <SocialAuth />
      </div>
    </main>
  );
}

export default AuthLayout;
