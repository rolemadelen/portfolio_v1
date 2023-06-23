import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <div className='relative pt-16 pb-8 flex flex-col items-center'>
        <div className='font-light text-sm text-center mb-8'>
          Designed & Developed by <a href="mailto:eu.jii@protonmail.com" className='underline underline-offset-4 decoration-from-font'>Jii Eu</a> @ 2023
        </div>
        <a href="#top" className='text-xs text-gray-500 rounded-md border-gray-300 border-[1px] w-10 h-10 flex justify-center items-center my-4 lg:hidden'>top</a>
      </div>
    </>
  )
}

export default Footer
