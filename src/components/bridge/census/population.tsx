import { useRecoilValue } from 'recoil';
import { populationStat } from '@selector/CensusSelector';

import PieChart from '@components/chart/PieChart';
import { ChartData } from '@interface/common';
import { useEffect } from 'react';

function Population() {
    // 인구통계자료
    const populationData = useRecoilValue(populationStat);
    const populationChartData: ChartData = { labels: [], data: [], dataLabel: '' };

    function ShowChart() {
        populationData.map((data) => {
            populationChartData.labels.push(data.adm_nm);
            populationChartData.data.push(data.population);
        });
        populationChartData.dataLabel = '인구수';
        return <PieChart chartData={populationChartData} />;
    }

    return (
        <div>
            <ShowChart />
        </div>
    );
}

export default Population;
