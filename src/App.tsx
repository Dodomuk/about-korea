import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import axios from "axios";
import { isFormElement } from 'react-router-dom/dist/dom';

function App(){
  const [count, setCount] = useState(0)
  const [isApiCall, setIsApiCall] = useState(false)

  useEffect(() => { 
    if (isApiCall) { 
      console.log('이미 한번 호출함');
    } else{
    axios.get(`${import.meta.env.VITE_SGIS_URL}/OpenAPI3/auth/authentication.json`, {
      params: {
        consumer_key: import.meta.env.VITE_SGIS_SERVICE_ID,
        consumer_secret: import.meta.env.VITE_SGIS_API_KEY
      }
    }).then((response) => { 
      console.log('응답부', response);
      setCount(100);
      setIsApiCall(true);
    })
  }
  });

  return (
    <div className="App">
      <BrowserRouter>
      <div>
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
          sgis api 발급< br/>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        </p>
        </BrowserRouter>
    </div>
  )
}

export default App
