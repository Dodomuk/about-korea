import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { getKey } from '../selector/SgisSelector';
import { keyState } from '../store/SgisStore';

const Main = () => {
  const [key, setKey] = useRecoilState(keyState);

  const responseKey = useRecoilValueLoadable(getKey);

  const navigate = useNavigate();

  function getAccess() {
    console.log(responseKey);
    switch (responseKey.state) {
      case 'hasValue':
        setKey(responseKey.contents);
        break;
      case 'hasError':
        throw responseKey.contents;
    }
  }
  // const useApiCall = () => {
  //   console.log('아가키', useRecoilValue(getKey));
  //   // const responseKey = useRecoilValue(getKey);
  //   // setKey(responseKey);
  //   // const responseKey = useRecoilValueLoadable(getKey);
  //   // console.log('recoil values>> ', responseKey);
  // switch (responseKey.state) {
  //   case 'hasValue':
  //     setKey(responseKey.contents);
  //     break;
  //   case 'hasError':
  //     throw responseKey.contents;
  // }
  // };

  function moveErrorPage() {
    navigate('/error');
  }

  return (
    <div>
      <div onClick={getAccess}>{key}</div>
      <div onClick={moveErrorPage}>errorTest</div>
    </div>
  );
};
export default Main;
