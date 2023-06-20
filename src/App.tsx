import { useEffect, useRef, useState } from 'react';
import './App.css'
import Vanta from './Vanta';

const App: React.FC = () => {
  return (
    <>
      {/*<Vanta />*/}
      {/*<h1 className='absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-3xl md:text-5xl lg:text-7xl'></h1>*/}
      {/*https://codepen.io/KaioRocha/pen/YoEVvZ*/}
      <div className='container'>
        <div className='box'>
          <div className='title'>
            <span className='block'></span>
            <h1 className='font-bold'>Madelen Eu<span></span></h1>
          </div>
          <div className='role'>
            <div className='block'></div>
            <p>Front-End Developer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
