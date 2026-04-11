import SocialAuth from "@/components/forms/SocialAuth";
import { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="px-8 flex-center w-full h-full">
      <div className="flex-center flex-col gap-4 border w-full sm:max-w-xl sm:m-auto p-10 border-zinc-500">
        <div>
          <span className="text-primary-500 text-3xl font-bold">Q</span>urio
        </div>
        {children}
        <SocialAuth />
      </div>
    </main>
  );
}

export default AuthLayout;
