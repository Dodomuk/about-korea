import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { getKey } from '../selector/SgisSelector';
import { keyState } from '../store/SgisStore';

const Main = () => {
  // SGIS API 키
  const [key, setKey] = useRecoilState(keyState);
  const responseKey = useRecoilValueLoadable(getKey);

  // 인구통계자료
  const [population, setPopulation] = useRecoilState();

  // FIXME : (전역화 고려)
  const navigate = useNavigate();

  function getAccess() {
    switch (responseKey.state) {
      case 'hasValue':
        setKey(responseKey.contents);
        break;
      case 'hasError':
        throw responseKey.contents;
    }
  }

  function moveErrorPage() {
    navigate('/error');
  }
  
  function getPopulationStatistics() { 
    switch
  }

  return (
    <div>
      <div onClick={getAccess}>{key}</div>
      <div onClick={moveErrorPage}>errorTest</div>
      <div onClic={get}>api 정보 받아오기 test</div>
    </div>
  );
};
export default Main;
