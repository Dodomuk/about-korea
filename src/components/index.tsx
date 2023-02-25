import axios from 'axios';
import { useEffect, useState } from 'react';
import { getAccessKey } from '../store/SgisStore';

function Main() {
  const [key, setKey] = useState('');

  useEffect(() => {
    isApiCall();
  });

  async function isApiCall() {
    if (!key) {
      const responseKey = await getAccessKey();
      setKey(responseKey);
    }
  }

  return <div>{key}</div>;
}

export default Main;
