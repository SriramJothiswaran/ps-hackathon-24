/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
          element: 'img',
          src: '/ques1.png'
        }
      ],
      options: [
        `The typescript compiler confirms that toUpperCase exists on the stringType instance.`,
        `The typescript compiler states that toUpper does not exist on the anyType instance`,
        `The typescript compiler confirms that toUpperCase exists on the anyType instance`,
        `The typescript compiler states that the toUpperCase function does not exist on the objectType instance.`,
        `The typescript compiler confirms that the toUpperCase function exists on the objectType instance.`
      ]
    },
    {
      id: 2,
      question: [
        {
          element: 'p',
          text: `﻿You are working on a calculator application where users can input a mathematical expression such as: (3+5)* (2-4).`
        },
        {
          element: 'p',
          text: `﻿To correctly evaluate this expression, the application needs to validate the expression and ensure that the parentheses are balanced. The balanced parentheses are crucial for determining the order of operations and evaluating the expression correctly.`
        },
        {
          element: 'p',
          text: `﻿You have used an Al assistant to generate the following function to check if the parentheses in an expression are balanced:`
        },
        {
          element: 'img',
          src: '/ques2.png'
        },
        {
          element: 'p',
          text: `﻿What is correct for the given function?`
        }
      ],
      options: [
        `The function will both, validate an expression, and report the reason for any errors encountered.`,
        `The function will return false for an expression having mathematical operators with different precedence.`,
        `Set(s) can be removed and the pairs Record can be used instead of them`,
        `Using if..else constructs in the loop instead of Set<String> and pairs Record, will reduce the number of code changes needed to handle new bracket types.Using if..else constructs in the loop instead of Set<String> and pairs Record, will reduce the number of code changes needed to handle new bracket types.`,
        `The function will work correctly if the expression is made up of numbers and mathematical operators.`,
        `The function will iterate through the entire string for expressions like "[3 + 5 x (4-1] - 39]"`
      ]
    }
  ]
  return (
    <div className='bg-gray-100'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.target.reset()
          setCurrentQuestion(currentQuestion + 1)
        }}
      >
        <div className='h-screen flex flex-col container p-6 gap-8'>
          <h3 className='text-xl'>
            Question {currentQuestion + 1} of {questions.length}
          </h3>
          <p className='grow overflow-scroll bg-white p-6 text-lg'>
            {questions[currentQuestion].question.map((q, i) =>
              q.element === 'p' ? (
                <p key={`${currentQuestion}-${i}`} className='pb-4 leading-8'>
                  {q.text}
                </p>
              ) : q.element === 'img' ? (
                <img key={i} src={q.src} alt={q.text} />
              ) : (
                ''
              )
            )}
            <p className='text-md mt-6 mb-2'>(Select all applicable answers)</p>
            <ul className='flex flex-col gap-6 '>
              {questions[currentQuestion].options.map((o, i) => (
                <li
                  key={`${i}`}
                  className='flex items-center gap-2 text-lg cursor-pointer'
                >
                  <input
                    type='checkbox'
                    id={`${currentQuestion}-${i}`}
                    name={`${currentQuestion}-${i}`}
                  />
                  <label
                    htmlFor={`${currentQuestion}-${i}`}
                    className='cursor-pointer'
                  >
                    {o}
                  </label>
                </li>
              ))}
            </ul>
          </p>
          <div className='ml-auto flex gap-4 items-center'>
            <p className='text-lg text-gray-700'>Remaining Time: 40 min</p>
            {currentQuestion === questions.length - 1 ? (
              <Button size='xl' asChild>
                <Link href='/tests/typescript/result'>Submit</Link>
              </Button>
            ) : (
              <Button type='submit' size='xl'>
                Submit & Next
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Page
