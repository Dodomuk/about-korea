import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { accessKey } from '../store/SgisStore';

function Main() {
  const key = useRecoilValue(accessKey);

  return <div>sgis api 발급 AccessKey : {key}</div>;
}

export default Main;
