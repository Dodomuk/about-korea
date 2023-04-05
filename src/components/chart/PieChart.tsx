import { ChartData } from '@interface/common';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip);

function PieChart(props: { chartData: ChartData }) {
    useEffect(() => {
        console.debug('PieChart', props.chartData);
    }, []);
    const data = {
        labels: props.chartData.labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: props.chartData.data,
                backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
            }
        ]
    };

    return (
        <>
            <Pie data={data} />
        </>
    );
}

export default PieChart;
