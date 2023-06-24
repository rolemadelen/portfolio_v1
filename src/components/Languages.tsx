import React, { useRef } from 'react'

interface Props {
  nameRef: React.RefObject<HTMLHeadingElement>
  roleRef: React.RefObject<HTMLHeadingElement>
}

const Languages: React.FC<Props> = ({ nameRef, roleRef }) => {
  const langRef = useRef<HTMLDivElement | null>(null)

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!langRef || !langRef.current) return;
    if (!nameRef || !nameRef.current) return;
    if (!roleRef || !roleRef.current) return;


    const flag = e.currentTarget.innerText

    if (flag === '🇰🇷') {
      langRef.current.innerText = '언어 능력'
      nameRef.current.innerText = '유지이'
      roleRef.current.innerText = '프론트엔드 개발자'
    } else if (flag === '🇯🇵') {
      langRef.current.innerText = '語学力'
      nameRef.current.innerText = '劉 ジー'
      roleRef.current.innerText = 'フロントエンド エンジニア'
    } else {
      langRef.current.innerText = 'Languages'
      nameRef.current.innerText = 'Jii Eu'
      roleRef.current.innerText = 'Front-End Developer'
    }
  }
  return (
    <div className='skills mb-24 mx-8' id='skills'>
      <h2 id="lang" className='title' ref={langRef}>Languages</h2>
      <div className='grid grid-rows-3 grid-cols-3 gap-2 text-center'>
        <div>Korean</div> <div className='hover:cursor-pointer' onClick={handleOnClick}>🇰🇷</div> <div>Native</div>
        <div>English</div><div className='hover:cursor-pointer' onClick={handleOnClick}>🇺🇸</div> <div>Fluent </div>
        <div>Japanese</div> <div className='hover:cursor-pointer' onClick={handleOnClick}>🇯🇵</div><div> Intermediate</div>
      </div>
    </div>
  )
}

export default Languages
