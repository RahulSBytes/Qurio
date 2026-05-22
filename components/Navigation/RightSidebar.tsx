import ROUTES from '@/constants/routes'
import { hotQuestions, popularTags } from '@/testingdataDeleteit'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TagCard from '../cards/TagCard'


function RightSidebar() {
  return (
    <section className="pt-36 custom-scroll background-light900_dark200 light-border sticky top-0 right-0 flex h-screen w-87.5 flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
            {
                hotQuestions.map(({_id, title})=>(
                    <Link key={_id} href={ROUTES.PROFILE(_id)} className='flex cursor-pointer items-center justify-between gap-7'>
                        <p className='body-medium text-dark500_light700'>{title}</p>
                        <Image src="/assets/icons/chevron-right.svg" alt='Chevron' width={20} height={20} className="invert-colors" />
                    </Link>
                ))
            }
        </div>
        </div>
        <div className="mt-16">
          <h3 className="h3-bold text-dark200_light900">Popular tags</h3>
          <div className="mt-7 flex flex-col gap-4">
            {popularTags.map(({_id,name,questions})=>(
              <TagCard key={_id} name={name} questions={questions} showCount compact />
            ))}
          </div>
        </div>
    </section>
  )
}

export default RightSidebar