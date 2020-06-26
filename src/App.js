import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import DogShow from './components/DogShow'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader';

const style = {
  width: 200
}

const CatShowWithHook = () => {
  const [category, setCategory] = useState('1')
  const [ data, loading ] = useURLLoader(`https://api.thecatapi.com/v1/images/search?limit=1&category_ids=${category}`)

   return (
     <>
     (loading ? <p>猫儿读取中</p>
        : <img src={data && data[0].url} alt="cat" style={style}/>)
      <div>
        <button onClick={() => setCategory('1')}>切换1</button>
        <button onClick={() => setCategory('5')}>切换5</button>
      </div>
    </>
   )
}

function App() {
  const position = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CatShowWithHook/>
        <h1>
          h1 中的 y = {position.y}
        </h1>
        <DogShow/>
        <MouseTracker/>
        <LikeButton/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
