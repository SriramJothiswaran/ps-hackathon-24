'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const questions = [
    {
      id: 1,
      question: [
        {
          element: 'p',
          text: `﻿The following code initializes strings as three different types and attempts to make them uppercase. Which statements about the behavior of the typescript compiler are correct?`
        },
        {
          element: 'p',
          text: `Every job includes repetitive tasks. Whether it's a support agent analyzing frequent help requests, a team leader monitoring performance metrics`
        },
        {
          element: 'p',
          text: `Every job includes repetitive tasks. Whether it's a support agent analyzing frequent help requests, a team leader monitoring performance metrics`
        }
      ],
      options: [
        `The typescript compiler confirms that toUpperCase exists on the stringType instance.`,
        `The typescript compiler states that toUpper does not exist on the anyType instance`,
        `The typescript compiler confirms that toUpperCase exists on the anyType instance`,
        `The typescript compiler states that the toUpperCase function does not exist on the objectType instance.`,
        `The typescript compiler confirms that the toUpperCase function exists on the objectType instance.`
      ]
    }
  ]
  return (
    <div className='bg-gray-100'>
      <div className='h-screen flex flex-col container p-6 gap-8'>
        <h3 className='text-xl'>Question 1 of 2</h3>
        <p className='grow overflow-scroll bg-white p-6 text-lg'>
          {questions[currentQuestion].question.map(
            (q, i) =>
              q.element === 'p' && (
                <p key={i} className='pb-4 leading-8'>
                  {q.text}
                </p>
              )
          )}
          <p className='text-md mt-6 mb-2'>(Select all applicable answers)</p>
          <ul className='flex flex-col gap-6 '>
            {questions[currentQuestion].options.map((o, i) => (
              <li
                key={i}
                className='flex items-center gap-2 text-lg cursor-pointer'
              >
                <input type='checkbox' id={i} />
                <label htmlFor={i} className='cursor-pointer'>
                  {o}
                </label>
              </li>
            ))}
          </ul>
        </p>
        <div className='ml-auto flex gap-4 items-center'>
          <p className='text-lg text-gray-700'>Remaining Time: 40 min</p>
          <Button size='xl'>Submit & Next</Button>
        </div>
      </div>
    </div>
  )
}

export default Page
