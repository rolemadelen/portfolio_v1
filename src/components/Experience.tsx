import React from 'react'
import Work from './Work'

const Experience: React.FC = () => {
  return (
    <div className='experience mb-24 mx-8' id='experience'>
      <h2 className='title'>Experience</h2>
      <Work
        date={'Apr 2021 - Feb 2023'}
        role={'Frontend Engineer'}
        location={'Minatomirai, Japan | Remote'}
        company={'Aikomi Inc.'}
        website={'https://aikomi.co.jp/'}
        skillsHighlight={['HTML', 'SCSS', 'JavaScript', 'React.js',
          'Technical Documentation', 'Japanese-English Interpretation']}
        skills={['PHP', 'AWS Lightsail', 'REST API', 'MySQL',]
        }>
        <div className='contribution text-sm text-gray-700 mt-3 mb-5'>
          Built and deployed a brand new website called Aikomi Care, a webiste designed to introduce users to Aikomi Care.
          Also contributed in maintaining and updating the UI, ensuring its consistent functionality, usability, and visual appeal through regular monitoring and proactive updates.
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
          Developed a subpage that effectively introduced the company's product, utilizing a given template.
        </div>
      </Work>
      <Work
        date={'Sept 2014 - Apr 2016'}
        role={'Computer Lab Aide'}
        location={'Riverside, CA'}
        company={'Riverside City College'}
        website={'https://www.rcc.edu/student-support/ccc-lab.html'}
        skillsHighlight={['C', 'C++', 'Algorithms', 'Data Structures', 'Debugging', 'MS Word', 'MS Excel', 'MS PowerPoint']}
        skills={['Java', 'MS PowerPoint', 'MS Access']
        }
      >
        <div className='contribution text-sm text-gray-700 mt-3 mb-5'>
          Provided programming support in C++ and Java, assisting students with assignments and projects. And tutored students in CS and CIS Software enhancing their proficiency in essential tools.
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
