import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('data.json').then(data => data.json()).then(data => setData(data));

    },[])
    
    return (
        <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="month" />
    <YAxis/>
  </LineChart>
    );
};

export default LineCharts;