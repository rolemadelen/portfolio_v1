import React from 'react'
import Project from './Project'
import AllProjects from './AllProjects'

const Projects: React.FC = () => {
  return (
    <>
      <div className='experience mb-8 mx-16' id='projects'>
        <h2>Projects</h2>
        <div className='project'>
          <Project
            imgsrc={'/src/assets/aikomicare.jpg'}
            title={'Aikomiケア Website'}
            skills={['Vite', 'JavaScript', 'PHP', 'SCSS', 'AWS Lightsail']}
            link={'https://aikomicare.com/'}>
            <div className='text-sm'>
              A webiste designed to introduce users to Aikomi Care and step-by-step guidance throughout their entire service experience.
            </div>
          </Project>
          <Project
            imgsrc={'/src/assets/minimalistblog.jpg'}
            title={'Minimalist | Personal Blog'}
            skills={['TypeScript', 'Next.js', 'TailwindCSS', 'Styled Component', 'Vercel']}
            link={'https://www.bepersistent.dev/'}>
            <div className='text-sm'>
              Created a minimalist-inspired blog featuring clean aesthetics and a focus on simplicity, providing users with a distraction-free reading experience.
            </div>
          </Project>
          <Project
            imgsrc={'/src/assets/artlog.jpg'}
            title={'Artlog'}
            skills={['MongoDB', 'Express.js', 'React.js', 'Redux', 'Node.js', 'TypeScript', 'SCSS', 'Axios']}
            link={'https://artlogs.netlify.app/'}>
            <div className='text-sm'>
              Created Artlog as a personal endeavor, curating a visual diary of my daily outfits as a hobby artist, fostering creativity and self-expression in the realm of minimalist fashion.
            </div>
          </Project>
          <Project
            imgsrc={'/src/assets/portfolio.jpg'}
            title={'www.jiieu.com'}
            skills={['React.js', 'TypeScript', 'TailwindCSS', 'SCSS']}
            link={'https://www.jiieu.com'}
          >
            <div className='text-sm'>
              A portfolio website built with React.
            </div>
          </Project>
        </div>
      </div>
      <AllProjects />
    </>
  )
}

export default Projects
