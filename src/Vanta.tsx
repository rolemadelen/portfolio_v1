import React from 'react'
import { useState, useRef, useEffect } from 'react'
import TRUNK from 'vanta/dist/vanta.trunk.min'
import TOPOLOGY from 'vanta/dist/vanta.topology.min'

const Vanta: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const refVanta = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(TRUNK({
        el: refVanta.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        color: 0xe3e3e3,
        backgroundColor: 0xffffff,
        chaos: 2,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <>
      <div className='vanta min-h-screen z-[-1]' ref={refVanta}></div>
    </>
  )
}

export default Vanta;
