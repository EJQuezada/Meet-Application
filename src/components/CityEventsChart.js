import { useState, useEffect } from 'react';
import {
    ScatterChart,
    Scatter,
    XAxis, YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const CityEventsChart = ({ allLocations, events }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(getData());
    }, [`${data}`]);

    const getData = () => {
        const data = allLocations.map((location) => {
            const count = events.filter((event) => event.location === location).length
            const city = location.split((/, | - /))[0]
            return { city, count };    
        })
        return data;
    };

    return (
        <ResponsiveContainer width="99%" height={400}>
     <PieChart>
       <Pie
         data={data}
         dataKey="value"
         fill="#8884d8"
         labelLine={false}
         label
         outerRadius={130}           
       />
     </PieChart>
   </ResponsiveContainer>
    );
}

export default CityEventsChart;