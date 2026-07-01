import { auth } from '@/auth';
import QuestionForm from '@/components/forms/QuestionForm'
import ROUTES from '@/constants/routes';
import { redirect } from 'next/navigation';
import React from 'react'

async function AskAQuestion() {

   const session = await auth();
  if (!session) redirect(ROUTES.SIGN_IN);

  return (
    <div>
      <h1>Ask a Question</h1>
      <div className="mt-9">
          <QuestionForm/>
      </div>
    </div>
  )
}

export default AskAQuestion