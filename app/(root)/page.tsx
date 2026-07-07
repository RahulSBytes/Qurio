// import { signOut } from "@/auth";
import QuestionCards from "@/components/cards/QuestionCards";
import HomeFilter from "@/components/filter/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import DataRenderer from "@/components/DataRenderer";
import { EMPTY_QUESTION } from "@/constants/states";
import { getQuestions } from "@/lib/actions/question.action";
import { Metadata } from "next";
import CommonFilter from "@/components/filter/CommonFilter";
import { HomePageFilters } from "@/constants/filters";
import Pagination from "@/components/Pagination";


export const metadata: Metadata = {
  title: "Qurio | Home",
  description:
    "Discover different programming questions and answers with recommendations from the community.",
};


export default async function Home({searchParams}: RouteParams) {
  const {page, pageSize, query, filter} = await searchParams;

  const { success, data, error } = await getQuestions({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query,
    filter,
  });

    const { questions, isNext } = data || {};



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
        iconPosition="left"
        imgSrc="icons/search.svg" 
        placeholder="Search questions...."
        otherClasses="flex-1"
        />
         <CommonFilter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </section>
      <HomeFilter/>

        <DataRenderer
        success={success}
        error={error}
        data={questions}
        empty={EMPTY_QUESTION}
        render={(questions) => (
          <div className="mt-10 flex w-full flex-col gap-6">
            {questions.map((question) => (
              <QuestionCards key={question._id} question={question} />
            ))}
          </div>
        )}
      />

       <Pagination page={page} isNext={isNext || false} />
    </>
  );
}
