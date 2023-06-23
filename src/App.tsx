import './App.css'
import { useCallback, useEffect, useRef } from 'react'
import Skills from './components/Skills'
import Intro from './components/Intro'
import Experience from './components/Experience'
import Projects from './components/Projects'

const App: React.FC = () => {
  const madelenRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const touchYRef = useRef<number>(0);

  useEffect(() => {
    videoRef.current = document.querySelector('video')
    scrollRef.current = document.querySelector('.right')
    madelenRef.current = document.querySelector('.madelen')

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
      bg.style.width = "100%"

      setTimeout(() => {
        bg.style.width = "auto"
      }, 1000)
    }, 3000)

  }, [])

  const handleOnScroll = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef && videoRef.current) {
      videoRef && videoRef.current && videoRef.current?.pause();
      scrollRef.current = e.currentTarget as HTMLDivElement;

      const rate = (scrollRef.current.scrollHeight - document.body.scrollHeight) / videoRef.current.duration
      videoRef.current.currentTime = scrollRef.current.scrollTop / rate
    }
  }, [])

  const handleOnWheel = useCallback((e: React.WheelEvent) => {
    if (scrollRef && scrollRef.current)
      scrollRef.current.scrollTop += (e.deltaY / 2)
  }, [])

  const handleOnTouchStart = useCallback((e: React.TouchEvent) => {
    touchYRef.current = e.touches[0].pageY;
  }, [])

  const handleOnTouchMove = useCallback((e: React.TouchEvent) => {
    const offsetY = touchYRef.current - e.targetTouches[0].clientY;
    if (scrollRef && scrollRef.current)
      scrollRef.current.scrollTop += offsetY;
  }, [])

  const handleOnContextMenu = useCallback(() => {
    return false
  }, [])

  return (
    <>
      <div className='splash absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl text-align text-center'>
        <h1 className='splash-name opacity-0 duration-1000'>Jii Eu</h1>
        <h2 className='splash-portfolio opacity-0 duration-1000 text-gray-600'>Portfolio</h2>
      </div >
      <div className='max-w-screen-2xl mx-auto relative' onWheel={handleOnWheel} onTouchStart={handleOnTouchStart} onTouchMove={handleOnTouchMove}>
        <video onContextMenu={handleOnContextMenu} controls={false} muted={true} loop={false} autoPlay={false} ref={videoRef} className='opacity-0'>
          <source src='/src/assets/madelen-video.webm' type='video/webm; codecs="vp8.0, vorbis"' />
          <source src='/src/assets/madelen-video.mp4' type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
        </video>
        <div className='madelen opacity-0'></div>
        <div className='background max-w-screen-2xl m-auto fixed shadow-2xl z-[-1] overflow-hidden'>
          <div className='flex flex-col lg:flex-row h-screen overflow-scroll' onScroll={handleOnScroll}>
            <header className='left main header mx-8 pt-4 lg:py-20 flex flex-col justify-between'>
              <div>
                <h1 className='text-5xl font-light text-gray-800'>
                  Jii Eu
                </h1>
                <h2 className='mb-12 text-md font-light text-gray-500'>
                  Front-End Developer
                </h2>
                <div className='text-md mb-32 max-w-[35rem] font-light text-gray-700'>
                  I'm a front-end developer currently residing in Kentucky, passionate about crafting creative and simple digital experiences.
                </div>
              </div>
              <nav className='text-sm border-b-[1px] border-[#ccc] lg:border-0 pb-20 lg:pb-10 text-gray-800'>
                <ul className='sns mb-8'>
                  <li className='sns-item'>
                    <a href='https://github.com/rolemadelen' target="_blank" rel="noopener noreferrer">GitHub</a>
                  </li>
                  <li className='sns-item'>
                    <a href='https://www.linkedin.com/in/jiieu/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </li>
                  <li className='sns-item'>
                    <a href='https://www.bepersistent.dev/' target="_blank" rel="noopener noreferrer">Blog</a>
                  </li>
                </ul>
                <div>
                  <a href="mailto:eu.jii@protonmail.com">
                    eu.jii@protonmail.com
                  </a>
                </div>
              </nav>
            </header>
            <div className='right lg:overflow-scroll h-auto py-20 lg:pb-32' onScroll={handleOnScroll} ref={scrollRef}>
              <Intro />
              <Experience />
              <Skills />
              <Projects />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
