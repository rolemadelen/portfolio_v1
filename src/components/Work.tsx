import React from 'react'

interface Props {
  date: string
  role: string
  location: string
  company: string
  skills: string[]
  website: string
  children: React.ReactNode
}

const Work: React.FC<Props> = ({ date, role, location, company, skills, website, children }) => {
  const handleOnClick = () => {
    if (website !== '')
      window.open(website)
  }
  return (
    <>
      <div className='experience-item flex flex-col sm:flex-row mb-8 max-w-[50rem] p-4 border-b' onClick={handleOnClick}>
        <div className='date text-sm text-gray-600 mr-12 w-40 flex-[0.3]'>
          {date}
        </div>
        <div className='detail flex-1'>
          <div className='text-md'>
            {role} - {company}
          </div>
          <div className='location text-sm text-gray-600'>
            {location}
          </div>
          {children}
          <ul className='skill-list flex flex-wrap'>
            {skills.map((skill) => {
              return <li className='skill-item' key={skill}>{skill}</li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Work
