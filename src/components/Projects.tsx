import React from 'react'
import Project from './Project'
import AllProjects from './AllProjects'

const Projects: React.FC = () => {
  return (
    <>
      <div className='experience mb-24 mx-8' id='projects'>
        <h2 className='title'>Projects</h2>
        <div className='flex items-center ml-4 lg:justify-end text-sm mb-8'>
          <span className='inline-block bg-[#e3edff] border-2 border-blue-200 w-16 rounded-md h-6'></span>
          <span className='inline-block mx-2'> — </span>
          <span className='inline-block'>Primarily Utilized</span>
        </div>
        <div className='project'>
          <Project
            imgsrc={'/src/assets/aikomicare.gif'}
            title={'Aikomiケア Website'}
            skillsHighlight={['JavaScript', 'HTML', 'SCSS']}
            skills={['Vite', 'PHP', 'AWS Lightsail']}
            link={'https://aikomicare.com/'}>
            <div className='text-sm'>
              A webiste designed to introduce users to Aikomi Care and step-by-step guidance throughout their entire service experience.
            </div>
          </Project>
          <Project
            imgsrc={'/src/assets/minimalistblog.gif'}
            title={'Minimalist | Personal Blog'}
            skillsHighlight={['Next.js', 'TypeScript', 'TailwindCSS', 'Styled Component']}
            skills={['Vercel']}
            link={'https://www.bepersistent.dev/'}>
            <div className='text-sm'>
              Created a minimalist-inspired blog featuring clean aesthetics and a focus on simplicity, providing users with a distraction-free reading experience.
            </div>
          </Project>
          <Project
            imgsrc={'/src/assets/artlog.gif'}
            title={'Artlog'}
            skillsHighlight={['React.js', 'Redux', 'TypeScript', 'SCSS', 'MongoDB', 'Axios']}
            skills={['Node.js', 'Express.js']}
            link={'https://artlogs.netlify.app/'}>
            <div className='text-sm'>
              Created Artlog as a personal endeavor, curating a visual diary of my daily outfits as a hobby artist, fostering creativity and self-expression in the realm of minimalist fashion.
            </div>
          </Project>
          <Project
            imgsrc={'/src/assets/portfolio.gif'}
            title={'www.jiieu.com'}
            skillsHighlight={['React.js', 'React Hooks', 'TypeScript', 'TailwindCSS', 'SCSS']}
            skills={[]}
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
