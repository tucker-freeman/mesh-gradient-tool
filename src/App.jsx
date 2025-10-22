import React, { useState, useEffect } from 'react'
import GradientCanvas from './GradientCanvas'

export default function App() {
  const [hideUI, setHideUI] = useState(false)

  useEffect(() => {
    const toggleUI = (e) => {
      if (e.key.toLowerCase() === 'h') setHideUI(prev => !prev)
    }
    window.addEventListener('keydown', toggleUI)
    return () => window.removeEventListener('keydown', toggleUI)
  }, [])

  return (
    <div className={hideUI ? 'hidden-ui' : ''}>
      <GradientCanvas />
      <button className="ui" style={{ top: 20, right: 20 }}>Edit</button>
      <button className="ui" style={{ top: 20, left: 20 }}>👤</button>
      <button className="ui" style={{ bottom: 60, left: '50%', transform: 'translateX(-50%)' }}>⬆️</button>
      <button className="ui" style={{ bottom: 20, left: '50%', transform: 'translateX(-50%)' }}>✨ Generate ✨</button>
    </div>
  )
}
