import { useRecoilValue } from 'recoil';
import { populationStat } from '@selector/CensusSelector';

import PieChart from '@components/chart/PieChart';
import { ChartData } from '@interface/common';
import { useEffect } from 'react';

function Population() {
    // 인구통계자료
    const populationData = useRecoilValue(populationStat);
    const chartData: ChartData = { labels: [], data: [] };

    function ShowChart() {
        populationData.map((data) => {
            chartData.labels.push(data.adm_nm);
            chartData.data.push(data.population);
        });
        return <PieChart chartData={chartData} />;
    }

    return (
        <div>
            <ShowChart />
        </div>
    );
}

export default Population;
