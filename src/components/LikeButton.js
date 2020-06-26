import React, { useState, useEffect } from 'react'

const LikeButton = () => {

  const [ like, setLike ] = useState(0)
  const [ on, setOn ] = useState(false)

  useEffect(() => {
    console.log('useEffect 被调用了')
    document.title = `点击了${like}次`
  })
 
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>
        {like} 👍
      </button>
      <button onClick={() => setOn(!on)}>
        {on ? 'On' : 'Off'}
      </button>
    </div>
  )
}

export default LikeButton