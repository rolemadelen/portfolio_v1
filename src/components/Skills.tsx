import React from 'react';

const Skills: React.FC = () => {
  return (
    <>
      <div className='skills mb-8'>
        <h2 className='font-bold'>Skills</h2>
        <p>
          Over the course of two years, I have been honing my skills in web development, and my insatiable curiosity fuels my desire to constantly expand my knowledge in this rapidly changing field.
        </p>
        <div className='flex justify-between'>
          <ul className='languages'>
            <li className='title'>Languages</li>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>CSS Preprocessors</li>
            <li>JavaScript (ES6)</li>
            <li>TypeScript</li>
            <li>C / C++</li>
          </ul>
          <ul className='frameworks'>
            <li className='title'>Frameworks</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Express.js</li>
            <li>Jekyll</li>
            <li>TailwindCSS</li>
            <li>DaisyUI</li>
          </ul>
          <ul className='tools'>
            <li className='title'>Tools</li>
            <li>Bash</li>
            <li>Git Version Control</li>
            <li>GitHub & Bitbucket</li>
            <li>Jira</li>
            <li>AWS</li>
            <li>MongoDB</li>
            <li>Postman</li>
            <li>Netlify / Vercel / Heroku</li>
            <li>Figma</li>
          </ul>
        </div>
        <p>
        </p>
        <ul className='have-exp-with'>
          <li className='title'>Have Experience</li>
          <li className='note'>
            * I have hands-on experience with these from past projects and can swiftly adapt and familiarize myself with their syntax and usage.
          </li>
          <li>Java / Python / Ruby / Rails / PHP / jQuery / Vue.js</li>
        </ul>
      </div>
    </>
  )
}

export default Skills;
