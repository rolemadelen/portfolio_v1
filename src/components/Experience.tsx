import React from 'react'
import Work from './Work'

const Experience: React.FC = () => {
  return (
    <div className='experience mb-8 mx-8' id='experience'>
      <h2>Work Experience</h2>
      <Work
        date={'Apr 2021 - Jan 2023'}
        role={'Frontend Engineer'}
        location={'Minatomirai, Japan | Remote'}
        company={'Aikomi Inc.'}
        website={'https://aikomi.co.jp/'}
        skills={['HTML / CSS', 'SCSS', 'JavaScript', 'React.js',
          'Vite', 'AWS Lightsail', 'REST API', 'MySQL', 'Adobe XD',
          'Technical Documentation', 'Japanese-English Interpretation']
        }>
        <div className='contribution text-sm text-gray-700 mt-3 mb-5'>
          Built and deployed a brand new website called Aikomi Care, a webiste designed to introduce users to Aikomi Care.
          Also contributed in maintaining and updating the UI, ensuring its consistent functionality, usability, and visual appeal through regular monitoring and proactive updates.
        </div>
      </Work>
      <Work
        date={'Apr 2020 - Mar 2021'}
        role={'Foreign Language Teacher'}
        location={'Fujisawa, Japan'}
        company={'Borderlirk, Inc.'}
        website={'https://www.borderlink.co.jp/alt/whats_an_alt.html'}
        skills={[]}
      >
      </Work>
      <Work
        date={'Winter 2017'}
        role={'Frontend Engineer Intern'}
        location={'La Jolla, CA'}
        company={'FASTech LLC.'}
        website={''}
        skills={['HTML / CSS', 'JavaScript', 'PHP', 'jQuery']
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
        skills={['Java', 'C++', 'Algorithms', 'Data Structures', 'Debugging', 'MS Word', 'MS Excel',
          'MS PowerPoint', 'MS Access']
        }
      >
        <div className='contribution text-sm text-gray-700 mt-3 mb-5'>
          Provided programming support in C++ and Java, assisting students with assignments and projects. And tutored students in CS and CIS Software enhancing their proficiency in essential tools.
        </div>
      </Work>
    </div >
  )
}

export default Experience
