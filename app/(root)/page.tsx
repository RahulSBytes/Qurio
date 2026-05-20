// import { signOut } from "@/auth";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

export default async function Home() {
  
  return (
    <>
     <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient text-light-900! min-h-11.5 px-4 py-3"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION} className="max-sm:w-full">
            Ask a Question
          </Link>
        </Button>
      </section>
      <section>
        <LocalSearch
        route="/"
        imgSrc="/assets/icons/search.svg" 
        placeholder="Search questions...."
        otherClasses="flex-1"
        />
      </section>
        <div>
          <p>Question Card 1</p>
          <p>Question Card 2</p>
          <p>Question Card 3</p>
          <p>Question Card 4</p>
         
        </div>
    </>
  );
}
