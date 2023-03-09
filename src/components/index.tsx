import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { accessKey, getKey } from '@selector/SgisSelector';
import Population from '@components/chart/population';

const Main = () => {
  const [key, setKey] = useRecoilState(accessKey);
  const res = useRecoilValue(getKey);

  function stateComp() {
    return <Population accessKey={res} />;
  }

  // FIXME : (전역화 고려)
  function moveErrorPage() {
    const navigate = useNavigate();
    navigate('/error');
  }

  return <div>{stateComp()}</div>;
};
export default Main;
