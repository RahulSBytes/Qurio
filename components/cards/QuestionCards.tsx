import ROUTES from "@/constants/routes";
import { getTimeStamp } from "@/lib/getTimeStamp";
import { Question } from "@/types/types";
import Link from "next/link";
import React from "react";
import TagCard from "./TagCard";
import Matrix from "../Matrix";

interface Props {
  question: Question;
}

function QuestionCards({
  question: {
    _id,
    title,
    description,
    tags,
    author,
    upvotes,
    answers,
    views,
    createdAt,
  },
}: Props) {
  return (
    <div className="card-wrapper rounded-[10px] px-7 py-9 sm:px-11">
      <div className="flex flex-col-reverse items-center justify-between gap-5 sm:flex-row">
        <div className="flex-1">
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={ROUTES.QUESTION(_id)}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
        {/* {showActionBtns && <EditDeleteAction type="Question" itemId={_id} />} */}
      </div>

      <div className="mt-3.5 flex w-full flex-wrap gap-2">
        {tags.map(({ _id, name }) => (
          <TagCard key={_id} _id={_id} name={name} compact />
        ))}
      </div>
      
      <div className="flex items-center gap-5 max-sm:flex-wrap max-sm:justify-start">
        <Matrix />
      </div>
    </div>
  );
}

export default QuestionCards;
