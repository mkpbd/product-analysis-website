import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import useChartData from '../../hooks/useChartData';

const PieCharts = () => {
;
    const [data, setData] = useChartData();
    const [data1, setData2] = useChartData();
    return (
        <div>
    <h2 className='text-primary'>Investment VS Revenue</h2>
{/* <ResponsiveContainer width="100%" height="100%"> */}
<PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="revenue"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
        
      />
      <Pie
        data={data1}
        dataKey="revenue"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
    </PieChart>

      {/* </ResponsiveContainer> */}

        </div>
    );
};

export default PieCharts;