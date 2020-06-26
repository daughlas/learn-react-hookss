import React, { useState, useEffect } from 'react'
import useMousePosition from '../hooks/useMousePosition'
const MouseTracker = () => {
  const position = useMousePosition()
  return (
    <p>
      X: {position.x},
      Y: {position.y}
    </p>
  )
}

export default MouseTracker