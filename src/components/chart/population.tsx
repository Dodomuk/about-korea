import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { getDemographics } from '@selector/CensusSelector';
import { populationStatistics } from '@store/CensusStore';
import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import PieChart from './PieChart';

function Population(props: { accessKey: string }) {
    // 인구통계자료
    const [population, setPopulation] = useRecoilState(populationStatistics);
    // const demographics = useRecoilValueLoadable(
    //     getDemographics({
    //         accessToken: props.accessKey,
    //         year: Number(dayjs().format('YYYY')) - 2
    //     })
    // );
    // const chartData: string[] = [];
    // // loadPopulation();
    // useEffect(() => {
    //     loadPopulation();
    // });

    // function loadPopulation() {
    //     switch (demographics.state) {
    //         case 'loading':
    //             setPopulation('인구조사 결과를 불러오는 중입니다...');
    //             break;
    //         case 'hasValue':
    //             setPopulation(demographics.contents.result[0].population);
    //             break;
    //         case 'hasError':
    //             throw demographics.errorOrThrow;
    //     }
    // }

    // const ShowChart = () => {
    //     if (demographics.state === 'hasValue') {
    //         chartData.push(population);
    //         return <PieChart chartData={chartData} />;
    //     } else {
    //         return <></>;
    //     }
    // };

    // return (
    //     <div>
    //         <ShowChart />
    //     </div>
    // );
}

export default Population;
