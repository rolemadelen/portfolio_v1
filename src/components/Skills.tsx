import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className='skills mb-24 mx-8' id='skills'>
      <h2 className='title'>Skills</h2>
      <div className='flex flex-wrap m-auto justify-between w-[75vw] lg:w-[40vw] xl:w-full'>
        <ul className='languages mx-2 mb-8 w-36'>
          <li className='highlight'>HTML</li>
          <li className='highlight'>SCSS</li>
          <li className='highlight'>JavaScript (ES6)</li>
          <li className='highlight'>TypeScript</li>
          <li className='highlight'>C / C++</li>
          <li>SQL</li>
        </ul>
        <ul className='frameworks mx-2 mb-8 w-36'>
          <li className='highlight'>React.js</li>
          <li className='highlight'>TailwindCSS</li>
          <li className='highlight'>Node.js</li>
          <li className='highlight'>Express.js</li>
          <li>Next.js</li>
          <li>DaisyUI</li>
        </ul>
        <ul className='tools mx-2 w-36'>
          <li className='highlight'>Git</li>
          <li className='highlight'>GitHub / Bitbucket</li>
          <li>Jira</li>
          <li>AWS Lightsail</li>
          <li>MongoDB</li>
          <li>Netlify / Vercel</li>
          <li>Figma</li>
        </ul>

        <div className='mt-8'>
          <div className='note text-sm text-gray-500 mb-4'>
            * Below skills are not my current focus; however, I have hands-on experience with these skills from past projects and can swiftly adapt and familiarize myself with their syntax and usage.
          </div>
          <div className='text-[0.9rem] text-[#555]'>Java / Python / Ruby / Jekyll / Rails / PHP / jQuery / Vue.js</div>
        </div>
      </div>
      <p>
      </p>
    </div>
  )
}

export default Skills;
