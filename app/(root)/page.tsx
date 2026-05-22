// import { signOut } from "@/auth";
import QuestionCards from "@/components/cards/QuestionCards";
import HomeFilter from "@/components/filter/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import {questions} from "@/testingdataDeleteit";
import Link from "next/link";


interface SearchParams{
  searchParams : Promise<{[key:string]:string}>
}


export default async function Home({searchParams}: SearchParams) {
  const {query = "", filter =""} = await searchParams;

const matchesQuery = questions.filter((question) =>
  question.title.toLowerCase().includes(query?.toLowerCase()) &&
  (
    filter === "" ||
    question.tags.some(
      (tag) => tag.name.toLowerCase() === filter.toLowerCase()
    )
  )
);

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
      <HomeFilter/>
        <div className="mt-10 flex w-full flex-col gap-6">
          {
            matchesQuery.map((question)=>(
              <QuestionCards key={question._id} question={question} />
            ))
          }
        </div>
    </>
  );
}
