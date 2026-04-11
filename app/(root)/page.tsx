import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  
  return (
    <div className="flex-center h-full text-white">
      <h1 className="text-4xl font-bold text-orange-600">Welcome to Home</h1>
      
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}
