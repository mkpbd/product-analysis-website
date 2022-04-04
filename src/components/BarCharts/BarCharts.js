import { Tooltip } from 'bootstrap';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const BarCharts = () => {
    const[data, setData] = useChartData();
    return (
        <div>
            <h2 className='text-primary text-center my-3'>Investment VS Revenue </h2>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="investment" />
          <YAxis />
          {/* <Tooltip /> */}
          <Legend />
          <Bar dataKey="sell" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
      {/* </ResponsiveContainer> */}
        </div>
    );
};

export default BarCharts;