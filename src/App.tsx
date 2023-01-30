import { useEffect, useState } from 'react'
import axios from "axios";

import { BrowserRouter } from 'react-router-dom'
import { isFormElement } from 'react-router-dom/dist/dom';

import Main from "./components/index";

import './App.css'
import reactLogo from './assets/react.svg'
import { RecoilRoot, RecoilEnv } from 'recoil';

function App() {
  
  //Recoil 중복 호출 에러 방지
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

  return (
    <div className="App">
      <BrowserRouter>
      <RecoilRoot>  
          <Main />
      </ RecoilRoot>  
      </BrowserRouter>
    </div>
  )
}

export default App
