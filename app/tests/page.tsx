/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/ui/navbar'

const Tests = () => {
  const courseList = [
    {
      id: 1,
      title: 'Typescript',
      photo: '/typescript.png'
    },
    {
      id: 2,
      title: 'ReactJS',
      photo: '/react.png'
    },
    {
      id: 3,
      title: 'ExpressJS',
      photo: '/express.png'
    },
    {
      id: 4,
      title: 'MongoDB',
      photo: '/mongo.png'
    },
    {
      id: 5,
      title: 'MySQL',
      photo: '/mysql.png'
    }
  ]

  return (
    <>
      <Navbar />
      <main className='container my-10 '>
        <h1 className='text-3xl font-extrabold tracking-tight'>
          Recommended Tests
        </h1>
        <p className='text-gray-700 pt-2'>
          Below tests are generated based on your skillset
        </p>

        <section>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10'>
            {courseList.map((course) => (
              <div className='col-span-1' key={course.id}>
                <Link href={`/tests/${course.title.toLowerCase()}`}>
                  <div className='rounded-xl border bg-card text-card-foreground shadow'>
                    <img src={course.photo} className='rounded-t-xl' />
                    <h3 className='text-lg font-semibold p-6 text-center'>
                      {course.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
export default Tests
