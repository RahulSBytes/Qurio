import { Search } from "lucide-react";
import Link from "next/link";
import Theme from "./Theme";

function Navbar() {
  return (
    <nav className="flex-between sticky z-30 h-14 border-b border-zinc-700 px-6">
     
      <Link
        href="/"
        className="font-mono text-2xl font-bold tracking-wide text-zinc-200 transition hover:text-zinc-100"
      >
        <span className="text-primary-500">Q</span>urio
      </Link>
      <div className="flex-center dark:bg-dark-500 bg-light-500  py-1 px-2 gap-1 rounded-sm"><Search size={16}/><input placeholder="Search for Questions Here..." className="text- placeholder:text-sm px-1 outline-0" type="text" /></div>
      <div><Theme/></div>
    </nav>
  );
}

export default Navbar;
