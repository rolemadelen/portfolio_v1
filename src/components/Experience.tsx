import React from 'react'
import Work from './Work'

const Experience: React.FC = () => {
  return (
    <div className='experience mb-24 mx-8' id='experience'>
      <h2 className='title'>Experience</h2>
      <div className='flex flex-col md:flex-row justify-around'>
        <div className='flex items-center text-sm mb-8 mx-2'>
          <span className='inline-block border-2 border-gray-400 w-16 rounded-md h-6'></span>
          <span className='inline-block mx-2'> — </span>
          <span className='inline-block'>Predominantly used</span>
        </div>
        <div className='flex items-center text-sm mb-8 mx-2'>
          <span className='inline-block border-2 w-16 border-gray-400 border-2 border-dashed rounded-md h-6'></span>
          <span className='inline-block mx-2'> — </span>
          <span className='inline-block'>Occasionally used</span>
        </div>
      </div>
      <Work
        date={'Apr 2021 - Feb 2023'}
        role={'Frontend Engineer'}
        location={'Minatomirai, Japan | Remote'}
        company={'Aikomi Inc.'}
        website={'https://aikomi.co.jp/'}
        skillsHighlight={['HTML', 'SCSS', 'JavaScript', 'React.js', 'Node.js',
          'Technical Documentation', 'Japanese-English Interpretation']}
        skills={['AWS Lightsail', 'Cron Jobs', 'PHP', 'MySQL',]
        }>
        <div className='contribution text-sm text-gray-700 mt-3 mb-5'>
          <div>
            - Built and deployed a brand new website called Aikomi Care,
            a webiste designed to introduce users to Aikomi Care.
          </div>
          <div>
            - Contributed in maintaining and updating the UI, ensuring its consistent functionality, usability, and visual appeal through regular monitoring and proactive updates.
          </div>
          <div>
            - Initiated and played a key role in creating the coding guidelines for the team, promoting consistency and best practices in software development.
          </div>
          <div>
            - Volunteered to provide interpretation support in English and Japanese languages for team members.
          </div>
          <div>
            - Successfully advocated for the adoption of Notion as the primary resource for onboarding, error reports, document management, planning, and internal wiki purposes, resulting in enhanced efficiency and collaboration within the team.
          </div>
        </div>
      </Work>
      <Work
        date={'Winter 2017'}
        role={'Frontend Engineer Intern'}
        location={'La Jolla, CA'}
        company={'FASTech LLC.'}
        website={''}
        skillsHighlight={['HTML', 'CSS', 'JavaScript']}
        skills={['PHP', 'jQuery']
        }>
        <div className='contribution text-sm text-gray-700 mt-3 mb-5'>
          <div>
            - Developed a subpage that effectively introduced the company's product, utilizing a given template.
          </div>
        </div>
      </Work>
      <Work
        date={'Sept 2014 - Apr 2016'}
        role={'Computer Lab Aide'}
        location={'Riverside, CA'}
        company={'Riverside City College'}
        website={'https://www.rcc.edu/student-support/ccc-lab.html'}
        skillsHighlight={['C / C++', 'Java', 'Algorithms', 'Data Structures', 'Debugging', 'Linux', 'Visual Studio', 'Git', 'MS Word', 'MS Excel', 'MS Powerpoint']}
        skills={['MS Access', 'NetBeans']
        }
      >
        <div className='contribution text-sm text-gray-700 mt-3 mb-5'>
          <div>
            - Provided programming support in C, C++ and Java, assisting students with assignments and projects.
          </div>
          <div>
            - Tutored students in CS and CIS Software enhancing their proficiency in essential tools.
          </div>
        </div>
      </Work>
      <div className='mx-auto hover:text-blue-500'>
        <a href="/resume.pdf" className='text-md hover:pl-4 duration-300'>
          View Résumé →
        </a>
      </div>
    </div >
  )
}

export default Experience
