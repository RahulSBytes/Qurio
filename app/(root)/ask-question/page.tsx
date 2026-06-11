import QuestionForm from '@/components/forms/QuestionForm'
import React from 'react'

function AskAQuestion() {
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