import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 h-14 border-b-2 border-zinc-700  bg-zinc-900">
  {/* Logo */}
  <Link
    href="/"
    className="text-2xl font-bold tracking-wide text-zinc-300 hover:text-zinc-100 transition"
  >
    Logo
  </Link>

  {/* Desktop Menu */}
  <div className="hidden md:flex items-center gap-6 text-sm font-medium">
    <Link
      href="/about"
      className="text-zinc-400 hover:text-zinc-200 transition"
    >
      About
    </Link>

    <Link
      href="/dashboard"
      className="text-zinc-400 hover:text-zinc-200 transition"
    >
      Dashboard
    </Link>

    <Link
      href="/products"
      className="text-zinc-400 hover:text-zinc-200 transition"
    >
      Products
    </Link>

    {/* CTA Button */}
    <Link
      href="/login"
      className="ml-2 px-4 py-1.5 rounded-md bg-zinc-400 text-zinc-800 font-bold hover:bg-zinc-500 transition"
    >
      Login
    </Link>
  </div>
</nav>
  );
}

export default Navbar;
