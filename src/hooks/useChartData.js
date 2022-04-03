import React, { useEffect, useState } from 'react';

const useChartData = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('data.json').then(data => data.json()).then(data => setData(data));

    },[data]);

    return [data, setData] ;

};

export default useChartData;