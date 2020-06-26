import React, { useState, useEffect } from 'react'

/**
 * 没有自定义之前
 */
const MouseTracker = () => {
  const [ position, setPosition ] = useState({x: 0, y: 0})

  useEffect(() => {
    const updateMouse = e => {
      console.log('update inner')
      setPosition({x: e.clientX, y: e.clientY})
    }
    console.log('add Listener')
    document.addEventListener('click', updateMouse)
    return () => {
      console.log('remove Listener')
      document.removeEventListener('click', updateMouse)
    }
  })

  return (
    <p>
      X: {position.x},
      Y: {position.y}
    </p>
  )
}

export default MouseTracker