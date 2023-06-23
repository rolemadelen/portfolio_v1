import './App.css'
import { useCallback, useEffect, useRef } from 'react'
import Skills from './components/Skills'
import Intro from './components/Intro'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App: React.FC = () => {
  const madelenRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const bg = document.querySelector('.background') as HTMLDivElement
    const splashName = document.querySelector('.splash-name') as HTMLHeadingElement
    const splashPortfolio = document.querySelector('.splash-portfolio') as HTMLHeadingElement

    setTimeout(() => {
      splashName.style.opacity = '1.0'

      setTimeout(() => {
        splashPortfolio.style.opacity = '1.0'
      }, 500)
    }, 500)

    setTimeout(() => {
      splashName.style.opacity = '0.0'
      splashPortfolio.style.opacity = '0.0'
      if (videoRef.current) videoRef.current.style.opacity = '1.0'
      if (madelenRef.current) madelenRef.current.style.opacity = '1.0'
      bg.style.width = "90%"

      setTimeout(() => {
        splashName.style.display = 'none'
        splashPortfolio.style.display = 'none'
      }, 800)
    }, 3000)

  }, [])

  const handleOnScroll = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef && videoRef.current) {
      videoRef && videoRef.current && videoRef.current?.pause()
      scrollRef.current = e.currentTarget as HTMLDivElement

      const rate = (scrollRef.current.scrollHeight - document.body.scrollHeight) / videoRef.current.duration
      videoRef.current.currentTime = scrollRef.current.scrollTop / rate
    }
  }, [])

  const handleOnWheel = useCallback((e: React.WheelEvent) => {
    if (scrollRef && scrollRef.current)
      scrollRef.current.scrollTop += (e.deltaY / 2)
  }, [])

  const handleOnContextMenu = useCallback(() => {
    return false
  }, [])

  return (
    <>
      <div className='splash absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl text-align text-center'>
        <h1 className='splash-name opacity-0 transition-opacity duration-1000'>Jii Eu</h1>
        <h2 className='splash-portfolio opacity-0 duration-1000 transition-opacity text-gray-600'>Portfolio</h2>
      </div >
      <div className='relative' onWheel={handleOnWheel}>
        <video onContextMenu={handleOnContextMenu} controls={false} muted={true} loop={false} autoPlay={false} ref={videoRef} className='opacity-0 z-[-1] fixed left-0 bottom-0 h-full transition-opacity duration-1000 ease-in-out'>
          <source src='/src/assets/madelen-video.webm' type='video/webm; codecs="vp8.0, vorbis"' />
          <source src='/src/assets/madelen-video.mp4' type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
        </video>
        <div className='madelen opacity-0 fixed left-0 bottom-0 bg-cover h-screen w-screen z-[-1] transition-opacity duration-1000 ease-in-out' ref={madelenRef}></div>
        <div className='background w-0 rounded-sm max-w-screen-2xl m-auto fixed shadow-2xl z-[-1] transition-width duration-1000 ease-in-out overflow-hidden'>
          <div className='flex flex-col lg:flex-row h-screen overflow-scroll'>
            <aside className='aside left main header mx-8 pt-4 lg:pt-8 lg:pb-20 flex flex-col justify-between' id="top">
              <header>
                <h1 className='text-5xl font-light text-gray-800'>
                  Jii Eu
                </h1>
                <h2 className='mb-12 text-md font-light text-gray-500'>
                  Front-End Developer
                </h2>
                <div className='text-md mb-32 max-w-[35rem] font-light text-gray-700'>
                  I'm a front-end developer currently residing in Kentucky, passionate about crafting creative and simple digital experiences.
                </div>
              </header>
              <nav className='nav text-sm border-b-[1px] border-[#ccc] lg:border-0 pb-20 lg:pb-10 text-gray-800'>
                <ul className='nav-list mb-8'>
                  <li>
                    <a className='nav-item' href='https://github.com/rolemadelen' target="_blank" rel="noopener noreferrer">GitHub</a>
                  </li>
                  <li>
                    <a className='nav-item' href='https://www.linkedin.com/in/jiieu/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </li>
                  <li>
                    <a className='nav-item' href='https://www.bepersistent.dev/' target="_blank" rel="noopener noreferrer">Blog</a>
                  </li>
                </ul>
                <div>
                  <a className='nav-item' href="mailto:eu.jii@protonmail.com">
                    eu.jii@protonmail.com
                  </a>
                </div>
              </nav>
            </aside>
            <div className='content lg:overflow-scroll h-auto pt-20 mb-16 lg:py-8 ' onScroll={handleOnScroll} ref={scrollRef}>
              <Intro />
              <Experience />
              <Skills />
              <Projects />
              <Footer />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
