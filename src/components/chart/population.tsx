import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { getDemographics } from '@selector/CensusSelector';
import { populationStatistics } from '@store/CensusStore';
import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import PieChart from './PieChart';

function Population(props: { accessKey: string }) {
    // 인구통계자료
    const [population, setPopulation] = useRecoilState(populationStatistics);

    const chartData: string[] = [];

    const ShowChart = () => {
        chartData.push(population);
        return <PieChart chartData={chartData} />;
    };

    return (
        <div>
            <ShowChart />
        </div>
    );
}

export default Population;
