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
                  Portfolio Website ⬀
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
                  Minimalist Blog ⬀
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>TailwindCSS</li>
                  <li>Styled Component</li>
                  <li>Vercel</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2023</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/artlog" target="_blank" rel="noopener noreferrer">
                  Artlog ⬀
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>MongoDB</li>
                  <li>React.js</li>
                  <li>Redux</li>
                  <li>Express.js</li>
                  <li>Node.js</li>
                  <li>TypeScript</li>
                  <li>SCSS</li>
                  <li>Axios</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2023</td>
              <td className='text-sm'>
                <a href="https://aikomicare.com/" target="_blank" rel="noopener noreferrer">
                  Aikomiケア Website ⬀
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>SCSS</li>
                  <li>AWS Lightsail</li>
                  <li>Vite</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2023</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/ghost-vatar" target="_blank" rel="noopener noreferrer">
                  Ghostvatar ⬀
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>HTML5</li>
                  <li>SCSS</li>
                  <li>html2canvas</li>
                  <li>JavaScript</li>
                  <li>Netlify</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2022</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/blog-v2" target="_blank" rel="noopener noreferrer">
                  Personal Blog v3 ⬀
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
                  Multilingual Blog Template ⬀
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>TypeScript</li>
                  <li>Next.js</li>
                  <li>Prism.js</li>
                  <li>Styled Component</li>
                  <li>TailwindCSS</li>
                  <li>SCSS</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2021</td>
              <td className='text-sm'>
                <a href="https://github.com/euisblue/bluelog" target="_blank" rel="noopener noreferrer">
                  Personal Blog v2 ⬀
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>Next.js</li>
                  <li>Styled Component</li>
                  <li>TypeScript</li>
                  <li>TailwindCSS</li>
                  <li>Vanta.js</li>
                  <li>SCSS</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2021</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/til-logger" target="_blank" rel="noopener noreferrer">
                  TIL Logger ⬀
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>Ruby</li>
                  <li>Ruby on Rails</li>
                  <li>JavaScript</li>
                  <li>TailwindCSS</li>
                  <li>jQuery</li>
                  <li>SQLite3</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2020</td>
              <td className='text-sm'>
                <a href="https://github.com/euisblue/euisblue.github.io" target="_blank" rel="noopener noreferrer">
                  Personal Blog v1 ⬀
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
                  Baekjoon Online Judge CLI <span className='font-light'>(8k+ downloads)</span> ⬀
                </a>
              </td>
              <td className='built-with hidden sm:block'>
                <ul className='flex'>
                  <li>Ruby</li>
                  <li>Web Scraping</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className='text-sm'>2017</td>
              <td className='text-sm'>
                <a href="https://github.com/rolemadelen/chess" target="_blank" rel="noopener noreferrer">
                  Text-based Chess ⬀
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
