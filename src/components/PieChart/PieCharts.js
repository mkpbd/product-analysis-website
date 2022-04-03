import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import useChartData from '../../hooks/useChartData';

const PieCharts = () => {
    const [data, setData] = useChartData();
    return (
        <>
    <h2 className='text-primary'>Investment VS Revenue</h2>
<ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>

        </>
    );
};

export default PieCharts;