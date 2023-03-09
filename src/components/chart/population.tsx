import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { getDemographics } from '@selector/CensusSelector';
import { populationStatistics } from '@store/CensusStore';
import dayjs from 'dayjs';

function Population(props: { accessKey: string }) {
  // 인구통계자료
  const [population, setPopulation] = useRecoilState(populationStatistics);

  if (props.accessKey) {
    console.log('access', props.accessKey);
    const res = useRecoilValueLoadable(
      getDemographics({
        accessToken: props.accessKey,
        year: Number(dayjs().format('YYYY')) - 2,
      }),
    );

    switch (res.state) {
      case 'loading':
        setPopulation('인구조사 결과를 불러오는 중입니다...');
        break;
      case 'hasValue':
        setPopulation(res.contents.result[0].population);
        break;
      case 'hasError':
        throw res.errorOrThrow;
    }
  }
  return <div>{population}</div>;
}

export default Population;
