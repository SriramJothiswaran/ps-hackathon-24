'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Stepper } from '@/components/ui/steps'
import { FileUpload } from '@/components/ui/file-upload'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Step3 } from '@/components/ui/step3'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function Home() {
  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)
  const [step3, setStep3] = useState(false)
  const [complete, setComplete] = useState(false)
  const [skills, setSkills] = useState<string[]>([
    'NodeJS',
    'ReactJS',
    'ExpressJS',
    'MongoDB',
    'MySQL'
    // 'PostgreSQL',
    // 'Python',
    // 'Django',
    // 'Flask',
    // 'FastAPI',
    // 'AWS',
    // 'Azure',
    // 'GCP',
    // 'Docker',
    // 'Kubernetes',
    // 'Git',
    // 'GitHub',
    // 'Bitbucket',
    // 'Jira',
    // 'Confluence',
    // 'Trello',
    // 'Slack'
  ])
  const [additionalSkills, setAdditionalSkills] = useState('')
  const [steps, setSteps] = useState([
    {
      id: '01',
      name: 'Resume Upload',
      description: 'Upload your updated resume',
      href: '#',
      status: 'current'
    },
    {
      id: '02',
      name: 'Update Skillset',
      description: 'Finalize your core skills',
      href: '#',
      status: 'upcoming'
    },
    {
      id: '03',
      name: 'Rate your skills',
      description: 'Rate your skills based on profeciency',
      href: '#',
      status: 'upcoming'
    }
  ])

  const gigs = [
    {
      position: 'Sr. ReactJS Developer',
      datePosted: 'Today',
      company: 'Publicis Sapient',
      location: 'Bangalore, India',
      logo: '/ps-logo.svg'
    },
    {
      position: 'Manager Technology_Salesforce',
      datePosted: '1 day ago',
      company: 'Publicis Sapient',
      location: 'Bangalore, India',
      logo: '/ps-logo.svg'
    },
    {
      position: 'Sr. Associate Technology',
      datePosted: '1 day ago',
      company: 'Publicis Sapient',
      location: 'Bangalore, India',
      logo: '/ps-logo.svg'
    },
    {
      position: 'Associate Process',
      datePosted: '2 days ago',
      company: 'Publicis Sapient',
      location: 'Bangalore, India',
      logo: '/ps-logo.svg'
    }
  ]

  const teams = [
    {
      name: 'Experience Engineering',
      photo: '/team-1.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    }
  ]

  return (
    <main className='container my-10 '>
      <div className='flex flex-col items-center justify-center gap-12'>
        <Stepper steps={steps} />
        {step1 && (
          <>
            <FileUpload />
            <Button
              variant='secondary'
              onClick={() => {
                setStep1(false)
                setStep2(true)
                setSteps((prevSteps) =>
                  prevSteps.map((step) =>
                    step.id === '01'
                      ? { ...step, status: 'complete' }
                      : step.id === '02'
                      ? { ...step, status: 'current' }
                      : step
                  )
                )
              }}
            >
              {`Proceed ->`}
            </Button>
          </>
        )}
        {step2 && (
          <>
            <div className='max-w-[640px]'>
              <h2 className='text-lg font-medium'>
                Here are the list of skillset based on your resume
              </h2>{' '}
              <span className='bg-slate-900 mr-auto text-white font-semibold uppercase text-xs px-2 py-1'>
                Marcel Gigs
              </span>
              <div className='flex gap-4 mt-2 flex-wrap	'>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className='inline-flex items-center rounded-full bg-green-100 py-0.5 pl-2 pr-0.5 text-md font-medium text-green-700'
                  >
                    {skill}
                    <button
                      type='button'
                      onClick={() => {
                        setSkills(skills.filter((s) => s !== skill))
                      }}
                      className='ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-green-400 hover:bg-green-200 hover:text-green-500 focus:bg-green-500 focus:text-white focus:outline-none'
                    >
                      <span className='sr-only'>Remove small option</span>
                      <svg
                        className='h-2 w-2'
                        stroke='currentColor'
                        fill='none'
                        viewBox='0 0 8 8'
                      >
                        <path
                          strokeLinecap='round'
                          strokeWidth='1.5'
                          d='M1 1l6 6m0-6L1 7'
                        />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
              <h6 className='mt-8 pb-2 text-lg font-medium'>
                Additional skills
              </h6>
              <form>
                <div className='flex gap-4'>
                  <Input
                    placeholder='eg:typescript'
                    name='skill'
                    value={additionalSkills}
                    onChange={(e) => setAdditionalSkills(e.target.value)}
                  />
                  <Button
                    type='submit'
                    onClick={(e) => {
                      e.preventDefault()
                      if (additionalSkills.trim() === '') return
                      setSkills([...skills, additionalSkills])
                      setAdditionalSkills('')
                    }}
                  >
                    Add Skill{' '}
                  </Button>
                </div>
              </form>
            </div>
            <div className='flex gap-4'>
              <Button
                variant='secondary'
                onClick={() => {
                  setStep1(true)
                  setStep2(false)
                  setStep3(false)
                  setSteps((prevSteps) =>
                    prevSteps.map((step) =>
                      step.id === '01'
                        ? { ...step, status: 'current' }
                        : step.id === '02'
                        ? { ...step, status: 'upcoming' }
                        : step
                    )
                  )
                }}
              >
                {`<- Previous Step`}
              </Button>
              <Button
                variant='secondary'
                onClick={() => {
                  setStep1(false)
                  setStep2(false)
                  setStep3(true)
                  setSteps((prevSteps) =>
                    prevSteps.map((step) =>
                      step.id === '02' ? { ...step, status: 'complete' } : step
                    )
                  )
                }}
              >
                {`Next Step ->`}
              </Button>
            </div>
          </>
        )}
        {step3 && (
          <>
            <div>
              <h6 className='text-lg font-medium text-center'>
                Add your skills, years of experience and how competent you are
                with each of them.
              </h6>
              <Step3 skills={skills} />
            </div>
            <div className='flex gap-4'>
              <Button
                variant='secondary'
                onClick={() => {
                  setStep1(false)
                  setStep2(true)
                  setStep3(false)
                  setSteps((prevSteps) =>
                    prevSteps.map((step) =>
                      step.id === '02'
                        ? { ...step, status: 'current' }
                        : step.id === '03'
                        ? { ...step, status: 'upcoming' }
                        : step
                    )
                  )
                }}
              >
                {`<- Previous Step`}
              </Button>
              <Button
                onClick={() => {
                  setStep1(false)
                  setStep2(false)
                  setStep3(false)
                  setComplete(true)
                  setSteps((prevSteps) =>
                    prevSteps.map((step) =>
                      step.id === '03' ? { ...step, status: 'complete' } : step
                    )
                  )
                }}
              >
                {`Submit`}
              </Button>
            </div>
          </>
        )}
        {complete && (
          <>
            <div>
              <h6 className='text-lg font-medium text-center'>
                Take assesments to analyze your skill knowledge and know about
                your areas for improvement
              </h6>
              <div className='text-center mt-4'>
                <Button>{`View Assesments ->`}</Button>
              </div>
              <div className='mt-12'>
                <h2 className='text-2xl font-extrabold mb-8'>
                  Gigs Matching Your Skills
                </h2>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                {gigs.map((gig) => (
                  <div className='col-span-1' key={gig.position}>
                    <Card>
                      <CardHeader>
                        <span className='bg-slate-900 mr-auto text-white font-semibold uppercase text-xs px-2 py-1'>
                          Marcel Gigs
                        </span>

                        <CardTitle>{gig.position}</CardTitle>
                        <CardDescription>{gig.datePosted}</CardDescription>
                      </CardHeader>
                      <CardContent></CardContent>
                      <CardFooter className='border'>
                        <div className='flex gap-4 pt-2'>
                          <img src={gig.logo} className='h-12 w-12' />
                          <div>
                            <p className='text-gray-500 text-sm'>
                              {gig.company}
                            </p>
                            <span className='text-gray-500 text-sm'>
                              {gig.location}
                            </span>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
              <div className='mt-12'>
                <h2 className='text-2xl font-extrabold mb-8'>
                  Teams Channels Matching Your Skills
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                  {teams.map((team) => (
                    <div className='col-span-1' key={team.name}>
                      <Card>
                        <CardHeader className='text-center'>
                          <img
                            src='/ps-logo.svg'
                            className='h-24 w-24 mx-auto'
                          />
                          <CardTitle className='pb-4'>{team.name}</CardTitle>
                          <Button variant='outline'>Join Team</Button>
                        </CardHeader>

                        <CardFooter>
                          <div>
                            <p className='text-gray-500 text-sm'>
                              {team.description}
                            </p>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
