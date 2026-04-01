import Footer from "@/components/footer";
import Navbar from "@/components/Navigation/NavBar";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <main className="h-full w-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default layout;
