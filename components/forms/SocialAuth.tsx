import { Button } from "../ui/button";
import Image from "next/image";

function SocialAuth() {
  return (
    <div className="h-full w-full ">
      <div className="flex-center flex-col gap-2 sm:flex-row">
        <Button className="background-dark400_light900 py-3.5 ">
          <Image
            src="/assets/icons/github.svg"
            alt="github logo"
            width={20}
            height={20}
            className="invert-colors mr-1.5 object-contain"
          />
          <span className="text-sm text-primary-100">Continue with GitHub</span>
        </Button>

        <Button className="background-dark400_light900">
          <Image
            src="/assets/icons/google.svg"
            alt="google logo"
            width={20}
            height={20}
            className="invert-colors mr-1.5 object-contain"
          />
          <span className="text-sm text-primary-100">Continue with Google</span>
        </Button>
      </div>
    </div>
  );
}

export default SocialAuth;
