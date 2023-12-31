import React from 'react'

interface Props {
  imgsrc: string
  title: string
  skillsHighlight: string[]
  skills: string[]
  link: string
  children: React.ReactNode
}

const Project: React.FC<Props> = ({ imgsrc, title, skillsHighlight, skills, link, children }) => {

  const handleOnClick = () => {
    if (link !== '')
      window.open(link)
  }

  return (
    <div className='project-item flex flex-col sm:flex-row gap-8 mb-8 p-4 max-w-[50rem] relative duration-200 ease-in-out' onClick={handleOnClick}>
      <img src={imgsrc} loading={'lazy'} className='absolute w-full h-full z-[-1] opacity-5 sm:relative sm:opacity-100 rounded-md sm:w-32 sm:h-20 md:w-48 md:h-28 shadow-md' alt={title} />
      <div className='detail flex-1'>
        <div className='text-md mb-3'>{title} <span className='arrow'></span></div>
        {children}
        <ul className='skill-list flex flex-wrap mt-5'>
          {skillsHighlight.map(skill => {
            return <li className='skill-item !border-solid !text-[#333] !border-gray-500' key={skill}>{skill}</li>
          })}
          {skills.map(skill => {
            return <li className='skill-item' key={skill}>{skill}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Project
