import React from 'react'

interface Props {
  handleOnClick: React.MouseEventHandler
}

const Footer: React.FC<Props> = ({ handleOnClick }) => {

  return (
    <>
      <div className='font-light text-sm text-center mt-16 mb-12'>
        Designed & Developed by <a href="mailto:eu.jii@protonmail.com" className='underline underline-offset-4 decoration-from-font'>Jii Eu</a> @ 2023
        <div className='relative my-4 top' onClick={handleOnClick}><span>૮</span> ・ﻌ・<span>ა</span></div>
      </div>
      <div className='easter-egg text-xs text-gray-300 mx-auto text-center my-8'>
        ~ easter eggs (PC only)~
        <div className='text-[0.7rem]'>
          There are two real images of my puppy hidden in this page.
        </div>
      </div>
    </>
  )
}

export default Footer
