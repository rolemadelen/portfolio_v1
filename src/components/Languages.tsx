import React from 'react'

const Languages: React.FC = () => {
  return (
    <div className='skills mb-24 mx-8' id='skills'>
      <h2 className='title'>Languages</h2>
      <div className='grid grid-rows-3 grid-cols-3 gap-2 text-center'>
        <div>Korean</div> <div>🇰🇷</div> <div>Native</div>
        <div>English</div><div>🇺🇸</div> <div>Fluent </div>
        <div>Japanese</div> <div>🇯🇵</div><div> Conversational</div>
      </div>
    </div>
  )
}

export default Languages
