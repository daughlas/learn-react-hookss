import React, { useState } from 'react'

const LikeButton = () => {
  // 0 作为初始值
  const [obj, setObj ] = useState({
    like: 0,
    on: true
  })

  return (
    <div>
      <button onClick={() => {setObj({like: obj.like + 1, on: obj.on})}}>
        {obj.like} 👍
      </button>
      <button onClick={() => setObj({on: !obj.on, like: obj.like})}>
        {obj.on ? 'On' : 'Off'}
      </button>
    </div>
    
  )
}

export default LikeButton