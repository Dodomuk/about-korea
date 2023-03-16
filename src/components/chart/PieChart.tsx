import { Chart, ArcElement, Tooltip } from 'chart.js';
import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip);

function PieChart(props: { chartData: any[] }) {
    useEffect(() => {
        console.log(props.chartData);
    });
    const data = {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
            {
                label: 'Dataset 1',
                data: props.chartData,
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
