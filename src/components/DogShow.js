/* eslint-disable */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useURLLoader from '../hooks/useURLLoader'

const DogShow = () => {
  const [ data, loading ] = useURLLoader('https://dog.ceo/api/breeds/image/random')

  const style= {
    width: 200
  }

  return (
    <>
      {
        loading ? <p>狗狗读取中</p>
          : <img src={data && data.message} alt="dog" style={style}/>
      }
      <div>
        <button onClick={() => setFetch(!fetch)}>再看一张图片</button>
      </div>
    </>
  )
}

export default DogShow