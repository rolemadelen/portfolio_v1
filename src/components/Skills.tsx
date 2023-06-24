import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className='skills mb-24 mx-8' id='skills'>
      <h2 className='title'>Skills</h2>
      <div className='flex flex-wrap m-auto justify-between w-[75vw] lg:w-[40vw] xl:w-full'>
        <ul className='languages mx-2 mb-8 w-36'>
          <li className='underline uppercase font-semibold'>Languages</li>
          <li className=''>HTML</li>
          <li className=''>SCSS</li>
          <li className=''>JavaScript (ES6)</li>
          <li className=''>TypeScript</li>
          <li className=''>C / C++</li>
          <li>Bash</li>
        </ul>
        <ul className='frameworks mx-2 mb-8 w-36'>
          <li className='underline uppercase font-semibold'>Frameworks</li>
          <li className=''>React.js</li>
          <li className=''>Next.js</li>
          <li className=''>TailwindCSS</li>
          <li className=''>Node.js</li>
          <li className=''>Express.js</li>
          <li>DaisyUI</li>
        </ul>
        <ul className='tools mx-2 w-36'>
          <li className='underline uppercase font-semibold'>Tools</li>
          <li className=''>Git</li>
          <li className=''>GitHub / Bitbucket</li>
          <li>Jira</li>
          <li>AWS Lightsail</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Figma</li>
        </ul>

        <div className='mt-8'>
          <div className='note text-sm text-gray-500 mb-4'>
            * Below skills are not my current focus; however, I have hands-on experience with these skills from past projects and can swiftly adapt and familiarize myself with their syntax and usage.
          </div>
          <div className='text-[0.9rem] text-[#555]'>C# / Java / Python / Ruby / Jekyll / Rails / PHP / jQuery / Vue.js</div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
