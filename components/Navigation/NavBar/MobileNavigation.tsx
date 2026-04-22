import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          alt="hamburger menu"
          width={36}
          height={36}
          className="invert- sm:hidden"
          src="./assets/icons/hamburger.svg"
        />
      </SheetTrigger>
      <SheetContent side="left">
        <Link
          href="/"
          className="font-mono text-2xl font-bold tracking-wide text-zinc-200 transition hover:text-zinc-100"
        >
          <span className="text-primary-500">Q</span>urio
        </Link>
        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks/>
            </section>
          </SheetClose>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="min-h-10.25 w-full rounded-lg px-4 py-3 shadow-none bg-zinc-800 text-zinc-50">
                  Log in
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="min-h-10.25 w-full rounded-lg px-4 py-3 shadow-none">
                  Sign up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;
