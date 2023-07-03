import React, { useEffect, useState, useCallback } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenresChart = ({ events }) => {
	const [data, setData] = useState([]);

	const getData = useCallback(() => {
		const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
		const data = genres.map((genre) => {
			const filteredEvents = events.filter(events.filter(event => event.summary.includes(genre));
			return { 
                name: genre, 
                value: filteredEvents.length
            };
		});
		return data;
	}, [events]);

	useEffect(() => {
		setData(getData());
	}, [getData]);

	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

	return (
		<ResponsiveContainer height={400}>
			<PieChart width={400} height={400}>
				<Pie
					data={data}
					cx={200}
					cy={200}
					labelLine={false}
					outerRadius={80}
					fill="#8884d8"
					dataKey="value"
					label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default EventGenresChart;