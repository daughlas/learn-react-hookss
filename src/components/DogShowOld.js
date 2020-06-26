/* eslint-disable */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
const DogShow = () => {
  const [url, setUrl] = useState('')

  const [ loading, setLoading ] = useState(false)
  
  const [fetch, setFetch ] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://dog.ceo/api/breeds/image/random').then(result => {
      setUrl(result.data.message)
      setLoading(false)
    }).catch(err => {
      console.error(err)
    })
  }, [fetch])

  const style= {
    width: 200
  }

  return (
    <div>
      {
        loading ? <p>狗狗读取中</p>
          : <img src={url} alt="dog" style={style}/>
      }
      <div>
        <button onClick={() => setFetch(!fetch)}>再看一张图片</button>
      </div>
    </div>
  )
}

export default DogShow