/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Navbar } from '@/components/ui/navbar'

export default function Courses() {
  const courseList = [
    {
      id: 1,
      title: 'Understanding Typescript',
      photo: 'https://img-b.udemycdn.com/course/480x270/947098_02ec_2.jpg',
      link: 'https://www.udemy.com/course/understanding-typescript'
    },
    {
      id: 2,
      title: 'React Testing Library',
      photo: 'https://img-c.udemycdn.com/course/480x270/3780436_e8b4_6.jpg',
      link: 'https://www.udemy.com/course/react-testing-library/'
    }
  ]
  return (
    <>
      <Navbar />
      <main className='container my-10 '>
        <h1 className='text-3xl font-extrabold tracking-tight'>
          Recommended Courses
        </h1>
        <p className='text-gray-700 pt-2'>
          Below courses are auto curated to strengthen your core skills
        </p>
        <section>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
            {courseList.map((course) => (
              <div className='col-span-1' key={course.id}>
                <a href={course.link} target='_blank'>
                  <div className='rounded-xl border bg-card text-card-foreground shadow'>
                    <img src={course.photo} className='rounded-t-xl' />
                    <h3 className='text-lg font-semibold p-6'>
                      {course.title}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
