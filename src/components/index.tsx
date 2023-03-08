import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { getKey } from '../selector/SgisSelector';
import { getDemographics } from '../selector/CensusSelector';
import { populationStatistics } from '../store/CensusStore';
import { keyState } from '../store/SgisStore';
import dayjs from 'dayjs';

const Main = () => {
  // SGIS API 키
  const [key, setKey] = useRecoilState(keyState);
  const responseKey = useRecoilValueLoadable(getKey);

  // 인구통계자료
  const [population, setPopulation] = useRecoilState(populationStatistics);
  const demographicsRes = useRecoilValueLoadable(
    getDemographics({
      accessToken: key,
      year: Number(dayjs().format('YYYY')) - 2,
    }),
  );

  const populationTest = '';

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
    switch (demographicsRes.state) {
      case 'hasValue':
        setPopulation(demographicsRes.contents.result[0].population);
        break;
      case 'hasError':
        throw demographicsRes.errorOrThrow;
    }
  }

  return (
    <>
      <div onClick={getAccess}>{key}</div>
      <div onClick={moveErrorPage}>errorTest</div>
      <div onClick={getPopulationStatistics}>{population}</div>
    </>
  );
};
export default Main;
