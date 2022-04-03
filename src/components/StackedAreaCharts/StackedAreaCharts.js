import { Tooltip } from 'bootstrap';
import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const StackedAreaCharts = () => {
    const [data] = useChartData();
    return (
        <div>
            <h2>chart</h2>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          {/* <Tooltip /> */}
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
          {/* <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" /> */}
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      {/* </ResponsiveContainer> */}
        </div>
    );
};

export default StackedAreaCharts;