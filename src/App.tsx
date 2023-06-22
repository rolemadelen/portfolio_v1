import './App.css'
import { useCallback, useEffect, useRef } from 'react'
import Skills from './components/Skills'
import Intro from './components/Intro'
import Experience from './components/Experience'
import Projects from './components/Projects'

const App: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    videoRef.current = document.querySelector('video')
    scrollRef.current = document.querySelector('.right')
  }, [])

  const handleOnScroll = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef || !videoRef.current) return;

    videoRef.current?.pause();
    scrollRef.current = e.currentTarget as HTMLDivElement;

    const rate = (scrollRef.current.scrollHeight - document.body.scrollHeight) / videoRef.current.duration
    videoRef.current.currentTime = scrollRef.current.scrollTop / rate
  }, [])

  const handleOnWheel = useCallback((e: React.WheelEvent) => {
    if (scrollRef && scrollRef.current)
      scrollRef.current.scrollTop += (e.deltaY / 2);
  }, [])

  return (
    <div className='max-w-screen-2xl mx-auto relative' onWheel={handleOnWheel}>
      <video controls={false} muted={true} loop={false} autoPlay={true} className='bottom-0 left-0 cxl:left-auto fixed z-[-1]' ref={videoRef}>
        <source src='/src/assets/madelen-video.webm' type='video/webm; codecs="vp8.0, vorbis"' />
        <source src='/src/assets/madelen-video.mp4' type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
      </video>

      <div className='background max-w-screen-2xl m-auto fixed shadow-2xl z-[-1] overflow-hidden'>
        <div className='flex flex-col lg:flex-row h-screen overflow-scroll' onScroll={handleOnScroll}>
          <header className='left main header mx-16 pt-16 lg:py-20 flex flex-col justify-between sm:mx-20'>
            <div>
              <h1 className='text-7xl font-light text-gray-800'>
                Jii Eu
              </h1>
              <h2 className='mb-12 text-md font-light text-gray-500'>
                Front-End Developer
              </h2>
              <div className='text-lg sm:text-xl mb-32 max-w-[30rem] font-light text-gray-700'>
                I'm a front-end developer currently residing in Kentucky, passionate about crafting creative and simple digital experiences.
              </div>
            </div>
            <nav className='text-sm md:text-md border-b-[1px] border-[#ccc] lg:border-0 pb-20 lg:pb-10'>
              <ul className='sns mb-8'>
                <li className='sns-item'>
                  <a href='https://github.com/rolemadelen' target="_blank" rel="noopener noreferrer">gthb</a>
                </li>
                <li className='sns-item'>
                  <a href='https://www.linkedin.com/in/jiieu/' target="_blank" rel="noopener noreferrer">lnkdn</a>
                </li>
                <li className='sns-item'>
                  <a href='https://www.bepersistent.dev/' target="_blank" rel="noopener noreferrer">blg</a>
                </li>
              </ul>
              <div className='text-gray-800'>
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
  )
}

export default App
