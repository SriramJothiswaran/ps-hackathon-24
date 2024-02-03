import React from 'react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

interface Props {
  skills: string[]
}

const Step3 = ({ skills }: Props) => {
  const people = [
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member'
    }
    // More people...
  ]
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='mt-8 flex flex-col'>
        <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                    >
                      Skill
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Experience
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Competency
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {skills.map((skill) => (
                    <tr key={skill}>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 w-60'>
                        {skill}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 w-40'>
                        <Input />
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 w-80'>
                        <Select>
                          <SelectTrigger className='w-[180px]'>
                            <SelectValue placeholder='Select a value' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Proficiency</SelectLabel>
                              <SelectItem value='beginner'>Beginner</SelectItem>
                              <SelectItem value='experienced'>
                                Experienced
                              </SelectItem>
                              <SelectItem value='advanced'>Advanced</SelectItem>
                              <SelectItem value='expert'>Expert</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Step3.displayName = 'Step3'
export { Step3 }
