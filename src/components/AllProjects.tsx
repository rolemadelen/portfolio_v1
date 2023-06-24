import React from 'react'

const AllProjects: React.FC = () => {
  return (
    <div className='experience mb-8 mx-8' id='projects'>
      <h2 className='title mb-4'>All Projects</h2>
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
                  Portfolio Website <span className='arrow'>↗</span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li className='bg-[#e3edff] !border-blue-300'>React.js</li>
                  <li className='bg-[#e3edff] !border-blue-300'>TypeScript</li>
                  <li className='bg-[#e3edff] !border-blue-300'>TailwindCSS</li>
                  <li className='bg-[#e3edff] !border-blue-300'>SCSS</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2023</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/minimalist-blog" target="_blank" rel="noopener noreferrer">
                  Minimalist Blog <span className='arrow'>↗</span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>Next.js</li>
                  <li className='bg-[#e3edff] !border-blue-300'>TypeScript</li>
                  <li className='bg-[#e3edff] !border-blue-300'>TailwindCSS</li>
                  <li className='bg-[#e3edff] !border-blue-300'>Styled Component</li>
                  <li>Vercel</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2023</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/artlog" target="_blank" rel="noopener noreferrer">
                  Artlog <span className='arrow'>↗</span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>MongoDB</li>
                  <li className='bg-[#e3edff] !border-blue-300'>React.js</li>
                  <li>Redux</li>
                  <li className='bg-[#e3edff] !border-blue-300'>Express.js</li>
                  <li className='bg-[#e3edff] !border-blue-300'>Node.js</li>
                  <li className='bg-[#e3edff] !border-blue-300'>TypeScript</li>
                  <li className='bg-[#e3edff] !border-blue-300'>SCSS</li>
                  <li className='bg-[#e3edff] !border-blue-300'>Axios</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2023</td>
              <td className='text-sm'>
                <a href="https://aikomicare.com/" target="_blank" rel="noopener noreferrer">
                  Aikomiケア Website <span className='arrow'>↗</span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li className='bg-[#e3edff] !border-blue-300'>HTML</li>
                  <li className='bg-[#e3edff] !border-blue-300'>JavaScript</li>
                  <li>PHP</li>
                  <li className='bg-[#e3edff] !border-blue-300'>SCSS</li>
                  <li>AWS Lightsail</li>
                  <li className='bg-[#e3edff] !border-blue-300'>Vite</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2023</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/ghost-vatar" target="_blank" rel="noopener noreferrer">
                  Ghostvatar <span className='arrow'>↗</span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li className='bg-[#e3edff] !border-blue-300'>HTML5</li>
                  <li className='bg-[#e3edff] !border-blue-300'>SCSS</li>
                  <li>html2canvas</li>
                  <li className='bg-[#e3edff] !border-blue-300'>JavaScript</li>
                  <li>Netlify</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2022</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/blog-v2" target="_blank" rel="noopener noreferrer">
                  Personal Blog v3 <span className='arrow'>↗</span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>Next.js</li>
                  <li className='bg-[#e3edff] !border-blue-300'>Styled Component</li>
                  <li className='bg-[#e3edff] !border-blue-300'>TypeScript</li>
                  <li className='bg-[#e3edff] !border-blue-300'>TailwindCSS</li>
                  <li className='bg-[#e3edff] !border-blue-300'>SCSS</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2022</td>
              <td className='text-sm'>
                <a href="https://github.com/euisblue/nextjs-blog-template" target="_blank" rel="noopener noreferrer">
                  Multilingual Blog Template <span className='arrow'>↗</span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li className='bg-[#e3edff] !border-blue-300'>TypeScript</li>
                  <li>Next.js</li>
                  <li>Prism.js</li>
                  <li className='bg-[#e3edff] !border-blue-300'>Styled Component</li>
                  <li className='bg-[#e3edff] !border-blue-300'>TailwindCSS</li>
                  <li className='bg-[#e3edff] !border-blue-300'>SCSS</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2021</td>
              <td className='text-sm'>
                <a href="https://github.com/euisblue/bluelog" target="_blank" rel="noopener noreferrer">
                  Personal Blog v2 <span className='arrow'>↗</span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>Next.js</li>
                  <li className='bg-[#e3edff] !border-blue-300'>Styled Component</li>
                  <li className='bg-[#e3edff] !border-blue-300'>TypeScript</li>
                  <li className='bg-[#e3edff] !border-blue-300'>TailwindCSS</li>
                  <li>Vanta.js</li>
                  <li className='bg-[#e3edff] !border-blue-300'>SCSS</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2021</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/til-logger" target="_blank" rel="noopener noreferrer">
                  TIL Logger <span className='arrow'>↗</span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li className='bg-[#e3edff] !border-blue-300'>Ruby</li>
                  <li>Ruby on Rails</li>
                  <li className='bg-[#e3edff] !border-blue-300'>JavaScript</li>
                  <li className='bg-[#e3edff] !border-blue-300'>TailwindCSS</li>
                  <li>jQuery</li>
                  <li>SQLite3</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2020</td>
              <td className='text-sm'>
                <a href="https://github.com/euisblue/euisblue.github.io" target="_blank" rel="noopener noreferrer">
                  Personal Blog v1 <span className='arrow'>↗</span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>Jekyll</li>
                  <li>Liquid</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2020</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/boj-solvedac" target="_blank" rel="noopener noreferrer">
                  Baekjoon Online Judge CLI <span className='font-light'>(8k+ downloads)</span> <span className='arrow'>↗</span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li className='bg-[#e3edff] !border-blue-300'>Ruby</li>
                  <li>Web Scraping</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2017</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/chess" target="_blank" rel="noopener noreferrer">
                  Text-based Chess <span className='arrow'>↗</span>
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li className='bg-[#e3edff] !border-blue-300'>C++</li>
                  <li className='bg-[#e3edff] !border-blue-300'>Visual Studio</li>
                  <li className='bg-[#e3edff] !border-blue-300'>Data Structures</li>
                  <li className='bg-[#e3edff] !border-blue-300'>Algorithms</li>
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
