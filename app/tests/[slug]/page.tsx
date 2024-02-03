import React from 'react'
import { ClockIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Test = () => {
  return (
    <main className='max-w-[768px] mx-auto my-10 '>
      <h1 className='text-4xl font-extrabold tracking-tight mb-10'>
        Typescript
      </h1>
      <div className='border rounded-lg flex flex-col divide-y  '>
        <div className='p-6 flex flex-col gap-4'>
          <div className='text-gray-700 flex items-center font-medium'>
            <span>
              <ClockIcon className='mr-2 h-4 w-4' />
            </span>
            <span>Duration</span>
          </div>
          <p>
            40 minutes (You can pause the test to take a break after each
            question)
          </p>
        </div>
        <div className='p-6 flex flex-col gap-4'>
          <p className='w-48 text-green-700 font-medium'>Do</p>
          <p>
            You are permitted to use common references and tools, such as help
            files or a calculator.
          </p>
        </div>
        <div className='p-6 flex flex-col gap-4'>
          <p className='w-48 text-red-700 font-medium'>Don't</p>
          <ul>
            <li>
              You are not permitted to seek or submit solutions from any other
              source.
            </li>
            <li>
              Do not copy or share any test content with any other website or
              person.
            </li>
          </ul>
        </div>
        <div className='p-6 flex flex-col gap-4'>
          <p className='w-48 text-gray-700 font-medium'>Prepare</p>
          <div>
            <p>IDE: This test requires programming.</p>
            <p>
              We recommend having a development environment ready for each
              language.
            </p>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <Button className='mx-auto mt-10' asChild>
          <Link href='/tests/typescript/start'>Start the Test</Link>
        </Button>
      </div>
    </main>
  )
}

export default Test
