import React from 'react'

const AllProjects: React.FC = () => {
  return (
    <div className='experience mb-8 mx-8' id='projects'>
      <h2 className='title mb-4'>All Projects</h2>
      <div className='hidden sm:flex md:flex-row justify-around'>
        <div className='flex items-center text-sm mb-8 mx-2'>
          <span className='inline-block'>Proficient</span>
          <span className='inline-block mx-2'> — </span>
          <span className='inline-block border-2 border-gray-400 w-16 rounded-md h-6'></span>
        </div>
        <div className='flex items-center text-sm mb-8 mx-2'>
          <span className='inline-block border-2 w-16 border-gray-400 border-2 border-dashed rounded-md h-6'></span>
          <span className='inline-block mx-2'> — </span>
          <span className='inline-block'>Familiar</span>
        </div>
      </div>

      <div className='all-projects'>
        <table className='mx-auto'>
          <thead>
            <tr>
              <th>Year</th>
              <th>Project</th>
              <th className='hidden sm:block'>Built with</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-sm'>2023</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/portfolio" target="_blank" rel="noopener noreferrer">
                  Portfolio Website <span className='arrow'></span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>React.js</li>
                  <li>TypeScript</li>
                  <li>TailwindCSS</li>
                  <li>SCSS</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2023</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/minimalist-blog" target="_blank" rel="noopener noreferrer">
                  Minimalist Blog <span className='arrow'></span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>TailwindCSS</li>
                  <li>Styled Component</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>Vercel</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2023</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/artlog" target="_blank" rel="noopener noreferrer">
                  Artlog <span className='arrow'></span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>React.js</li>
                  <li>Redux</li>
                  <li>TypeScript</li>
                  <li>SCSS</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>MongoDB</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>Express.js</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>Node.js</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>Axios</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2023</td>
              <td className='text-sm'>
                <a href="https://aikomicare.com/" target="_blank" rel="noopener noreferrer">
                  Aikomiケア Website <span className='arrow'></span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>HTML</li>
                  <li>JavaScript</li>
                  <li>SCSS</li>
                  <li>Vite</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>PHP</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>AWS Lightsail</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2023</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/ghost-vatar" target="_blank" rel="noopener noreferrer">
                  Ghostvatar <span className='arrow'></span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>HTML</li>
                  <li>SCSS</li>
                  <li>JavaScript</li>
                  <li>Netlify</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>html2canvas</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2022</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/blog-v2" target="_blank" rel="noopener noreferrer">
                  Personal Blog v3 <span className='arrow'></span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>Next.js</li>
                  <li>Styled Component</li>
                  <li>TypeScript</li>
                  <li>TailwindCSS</li>
                  <li>SCSS</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2022</td>
              <td className='text-sm'>
                <a href="https://github.com/euisblue/nextjs-blog-template" target="_blank" rel="noopener noreferrer">
                  Multilingual Blog Template <span className='arrow'></span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>TypeScript</li>
                  <li>Next.js</li>
                  <li>Styled Component</li>
                  <li>TailwindCSS</li>
                  <li>SCSS</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>Prism.js</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2021</td>
              <td className='text-sm'>
                <a href="https://github.com/euisblue/bluelog" target="_blank" rel="noopener noreferrer">
                  Personal Blog v2 <span className='arrow'></span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>Next.js</li>
                  <li>Styled Component</li>
                  <li>TypeScript</li>
                  <li>TailwindCSS</li>
                  <li>SCSS</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>Vanta.js</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2021</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/til-logger" target="_blank" rel="noopener noreferrer">
                  TIL Logger <span className='arrow'></span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>JavaScript</li>
                  <li>TailwindCSS</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>Ruby</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>Ruby on Rails</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>SQLite3</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>jQuery</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2020</td>
              <td className='text-sm'>
                <a href="https://github.com/euisblue/euisblue.github.io" target="_blank" rel="noopener noreferrer">
                  Personal Blog v1 <span className='arrow'></span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>Ruby</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>Jekyll</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>Liquid</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2020</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/boj-solvedac" target="_blank" rel="noopener noreferrer">
                  Baekjoon Online Judge CLI <span className='font-light'>(8k+ downloads)</span> <span className='arrow'></span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>Ruby</li>
                  <li className='!text-[#777] !border-dashed !border-[#777]'>Web Scraping</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2017</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/chess" target="_blank" rel="noopener noreferrer">
                  Text-based Chess <span className='arrow'></span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>C++</li>
                  <li>Visual Studio</li>
                  <li>Data Structures</li>
                  <li>Algorithms</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div >
    </div >

  )
}

export default AllProjects
