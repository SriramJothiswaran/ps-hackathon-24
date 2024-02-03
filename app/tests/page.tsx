import React from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/ui/navbar'

const Tests = () => {
  const courseList = [
    {
      id: 1,
      title: 'Typescript',
      photo: 'https://img-b.udemycdn.com/course/480x270/947098_02ec_2.jpg'
    },
    {
      id: 2,
      title: 'ReactJS',
      photo: 'https://img-c.udemycdn.com/course/480x270/3780436_e8b4_6.jpg'
    },
    {
      id: 3,
      title: 'ExpressJS',
      photo: 'https://img-c.udemycdn.com/course/480x270/3780436_e8b4_6.jpg'
    },
    {
      id: 4,
      title: 'MongoDB',
      photo: 'https://img-c.udemycdn.com/course/480x270/3780436_e8b4_6.jpg'
    },
    {
      id: 5,
      title: 'MySQL',
      photo: 'https://img-c.udemycdn.com/course/480x270/3780436_e8b4_6.jpg'
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
                    <img
                      src={course.photo}
                      className='rounded-t-xl'
                      alt=''
                      srcset=''
                    />
                    <h3 className='text-lg font-semibold p-6'>
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
