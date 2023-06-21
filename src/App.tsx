import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Skills from './components/Skills'
import Intro from './components/Intro'
import Experience from './components/Experience'

const App: React.FC = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  const handleMouseMove = (e) => {
    const c = document.querySelector('.cursor');
    c.style.top = `${e.pageY}px`;
    c.style.left = `${e.pageX}px`;
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <span className='cursor absolute w-3 h-3 rounded-full bg-gray-700'></span>
      <video muted={true} loop={true} autoPlay={true} className='bottom-0 right-0 fixed z-[-1]'>
        <source src='/src/assets/madelen-video.mp4' type="video/mp4" />
      </video>

      <div className='background fixed border-[1px] border-black z-[-1]'>
      </div>
      <div className='flex flex-col lg:flex-row h-[92vh] px-16'>
        <header className='left main header h-full flex flex-col justify-between py-16'>
          <div>
            <h1 className='text-7xl text-gray-800' data-aos='fade-right' data-aos-duration='500'>
              Jii Eu
            </h1>
            <h2 className='mb-12 text-xl text-gray-600' data-aos='fade-right' data-aos-duration='500'>
              Front-End Developer
            </h2>
            <div className='text-2xl max-w-[30rem] text-gray-700' data-aos='fade-right' data-aos-duration='2000'>
              I'm a front-end developer currently residing in Kentucky, passionate about crafting minimalist and simple digital experiences.
            </div>
          </div>
          <nav className='header-nav text-2xl w-5/12 text-gray-700'>
            <div data-aos='fade-right' data-aos-duration='1500'>
              <a href='#' className='hover:bg-black text-black hover:text-white'>
                Work
              </a>
            </div>
            <div data-aos='fade-right' data-aos-duration='2000'>
              <a href='#' className='hover:bg-black text-black hover:text-white'>
                About
              </a>
            </div>
            <div data-aos='fade-right' data-aos-duration='2500'>
              <a href='#' className='hover:bg-black text-black hover:text-white'>
                Contact
              </a>
            </div>
          </nav>
        </header>
        <div className='right lg:overflow-scroll h-full py-16' data-aos='fade-up' data-aos-duration='1500'>
          <Intro />
          <Skills />
          <Experience />
        </div>
      </div>
    </div>
  )
}

export default App
