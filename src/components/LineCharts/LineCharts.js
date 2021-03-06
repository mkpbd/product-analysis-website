import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';


const LineCharts = () => {
    const [data, setData] = useChartData([]);

    
    return (
        <div>
            <h2 className='text-primary text-center my-3'>MONTHLY WISE SELL</h2>
        <LineChart width={500} height={300} data={data}>
    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="month" />
    <YAxis/>
  </LineChart>
  </div>
    );

};

export default LineCharts;