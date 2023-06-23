import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className='skills mb-8 mx-8' id='skills'>
      <h2 className='title'>Skills</h2>
      <div className='flex flex-wrap m-auto justify-between w-[75vw] lg:w-[40vw] xl:w-full'>
        <ul className='languages mx-2 mb-8 w-36'>
          <li className='skills-title'>Languages</li>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>CSS Preprocessors</li>
          <li>JavaScript (ES6)</li>
          <li>TypeScript</li>
          <li>C / C++</li>
        </ul>
        <ul className='frameworks mx-2 mb-8 w-36'>
          <li className='skills-title'>Frameworks</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Express.js</li>
          <li>Jekyll</li>
          <li>TailwindCSS</li>
          <li>DaisyUI</li>
        </ul>
        <ul className='tools mx-2 w-36'>
          <li className='skills-title'>Tools</li>
          <li>Bash</li>
          <li>Git Version Control</li>
          <li>GitHub</li>
          <li>Bitbucket</li>
          <li>Jira</li>
          <li>AWS</li>
          <li>MongoDB</li>
          <li>Postman</li>
          <li>Netlify / Vercel / Heroku</li>
          <li>Figma</li>
        </ul>

        <div className='mt-8'>
          <div className='note text-sm text-gray-500 mb-4'>
            * I have hands-on experience with skills below from past projects and can swiftly adapt and familiarize myself with their syntax and usage.
          </div>
          <div className='text-[0.9rem] text-[#555]'>Java / Python / Ruby / Rails / PHP / jQuery / Vue.js</div>
        </div>
      </div>
      <p>
      </p>
    </div>
  )
}

export default Skills;
