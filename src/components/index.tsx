import axios from 'axios';
import { useEffect, useState } from 'react';
import { atom, RecoilRoot, useRecoilState } from 'recoil';

function Main() {
  const returnKey = atom({
    key: 'returnKey',
    default: '',
  });

  const [count, setCount] = useState(0);
  const [isApiCall, setIsApiCall] = useState(false);
  const [key, setKey] = useRecoilState(returnKey);

  useEffect(() => {
    if (isApiCall) {
      console.log('이미 한번 호출함');
    } else {
      axios
        .get(
          `${import.meta.env.VITE_SGIS_URL}/OpenAPI3/auth/authentication.json`,
          {
            params: {
              consumer_key: import.meta.env.VITE_SGIS_SERVICE_ID,
              consumer_secret: import.meta.env.VITE_SGIS_API_KEY,
            },
          },
        )
        .then((response) => {
          console.log('응답부', response.data);
          setIsApiCall(true);
          setKey(response.data.result.accessToken);
        });
    }
  });

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        sgis api 발급 AccessKey : {key}
        <br />
        count is {count}
      </button>
    </div>
  );
}

export default Main;
