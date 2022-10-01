import React from 'react'
import Travel from './components/Travel'
import Navbar from './components/Navbar'
import './style.css'
import data from './data'

function App() {
    const places = data.map(item => {
        return (
        <Travel 
        key={item.title}
        item={item} />
        )
      });

  return (
    <div className="App">
      <Navbar />
      {places}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
