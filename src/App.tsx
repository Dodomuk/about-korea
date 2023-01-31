import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot, RecoilEnv } from 'recoil';

import Main from "./components/index";

import './App.css'


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
