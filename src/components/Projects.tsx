import React from 'react'
import Project from './Project'
import AllProjects from './AllProjects'

const Projects: React.FC = () => {
  return (
    <>
      <div className='experience mb-24 mx-8' id='projects'>
        <h2 className='title'>Projects</h2>
        <div className='project'>
          <Project
            imgsrc={'/src/assets/aikomicare.jpg'}
            title={'Aikomiケア Website'}
            skillsHighlight={['Vite', 'JavaScript', 'HTML', 'SCSS']}
            skills={['PHP', 'AWS Lightsail']}
            link={'https://aikomicare.com/'}>
            <div className='text-sm'>
              A webiste designed to introduce users to Aikomi Care and step-by-step guidance throughout their entire service experience.
            </div>
          </Project>
          <Project
            imgsrc={'/src/assets/minimalistblog.jpg'}
            title={'Minimalist | Personal Blog'}
            skillsHighlight={['TypeScript', 'TailwindCSS', 'Styled Component', 'Vercel']}
            skills={['Next.js']}
            link={'https://www.bepersistent.dev/'}>
            <div className='text-sm'>
              Created a minimalist-inspired blog featuring clean aesthetics and a focus on simplicity, providing users with a distraction-free reading experience.
            </div>
          </Project>
          <Project
            imgsrc={'/src/assets/artlog.jpg'}
            title={'Artlog'}
            skillsHighlight={['Node.js', 'React.js', 'Express.js', 'Node.js', 'TypeScript', 'SCSS', 'Axios']}
            skills={['MongoDB', 'Redux']}
            link={'https://artlogs.netlify.app/'}>
            <div className='text-sm'>
              Created Artlog as a personal endeavor, curating a visual diary of my daily outfits as a hobby artist, fostering creativity and self-expression in the realm of minimalist fashion.
            </div>
          </Project>
          <Project
            imgsrc={'/src/assets/portfolio.jpg'}
            title={'www.jiieu.com'}
            skillsHighlight={['React.js', 'TypeScript', 'TailwindCSS', 'SCSS']}
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
