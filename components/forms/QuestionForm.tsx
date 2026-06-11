"use client"
import React from 'react'

import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { AskQuestionSchema } from '@/lib/validation'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function QuestionForm() {

  const form = useForm({
        resolver: zodResolver(AskQuestionSchema),
        defaultValues : {
          title:"",
          content : "",
          tags :[]
        }
      })

      const handleCreateQuestion = () => {

      }

  return (
    <Form {...form} >
<form className='flex w-full flex-col gap-10' onSubmit={form.handleSubmit(handleCreateQuestion)}>
<FormField
            
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='paragraph-semibold text-dark400_light800'>
                  Question Title <span className='text-primary-500'>*</span>
                </FormLabel>

                <FormControl >
                  <Input
                    className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] rounded-1.5 border"
                    {...field}
                  />
                </FormControl>
<FormDescription className='body-regular text-light-500 mt-2.5'>
Be specific and imagine you&apos;re asking a quesion to another person.
</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
<FormField
            
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='paragraph-semibold text-dark400_light800'>
                  Detailed explanation of your problem <span className='text-primary-500'>*</span>
                </FormLabel>

                <FormControl >
                  Editor
                </FormControl>
<FormDescription className='body-regular text-light-500 mt-2.5'>
Introduce the problem and expand on what you&apos;ve put in the title.
</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
<FormField
            
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-3'>
                <FormLabel className='paragraph-semibold text-dark400_light800'>
                  Tags <span className='text-primary-500'>*</span>
                </FormLabel>

                <FormControl >
                  <div>
                  <Input
                    className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] rounded-1.5 border"
                    {...field}
                  />
                  Tags
                  </div>
                </FormControl>
<FormDescription className='body-regular text-light-500 mt-2.5'>
Add up to 3 tags to descibe what your question is about. You need to press enter to add a tag.
</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='mt-16 flex justify-end'>
            <Button
            type='submit'
            className='primary-gradient w-fit text-light-900!'
            >
              Ask a question
            </Button>
          </div>
</form>
    </Form>
  )
}

export default QuestionForm