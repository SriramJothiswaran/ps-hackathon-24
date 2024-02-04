/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Navbar } from '@/components/ui/navbar'

const Result = () => {
  const courseList = [
    {
      id: 1,
      title: 'Understanding Typescript',
      photo: 'https://img-b.udemycdn.com/course/480x270/947098_02ec_2.jpg',
      link: 'https://www.udemy.com/course/understanding-typescript'
    },
    {
      id: 2,
      title: 'Advanced Typescript: Generics, Patterns',
      photo: 'https://img-c.udemycdn.com/course/240x135/5625278_acdb_4.jpg',
      link: 'https://www.udemy.com/course/advanced-typescript/'
    }
  ]
  return (
    <>
      <Navbar />
      <main className='max-w-[768px] mx-auto border rounded-xl p-6 my-10'>
        <h1 className='font-bold text-3xl mb-4'>Test Finished</h1>
        <p className='pb-4'>{`Your total score for the "TypeScript" test was 50%.`}</p>
        <p className='pb-4'>{`This score does not qualify you in the assesment.`}</p>
        <p className='pb-2'>{`We request you to improve your knowledge on following areas:`}</p>
        <ul className='list-disc ml-8'>
          <li>Generics</li>
          <li>Union and Intersection Types</li>
        </ul>
        <p className='pt-10 font-medium'>{`Below courses are auto curated to strengthen your skills:`}</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
          {courseList.map((course) => (
            <div
              className='col-span-1 rounded-xl border bg-card text-card-foreground shadow'
              key={course.id}
            >
              <a href={course.link} target='_blank'>
                <img src={course.photo} className='rounded-t-xl' />
                <h3 className='text-md font-semibold p-6'>{course.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Result
