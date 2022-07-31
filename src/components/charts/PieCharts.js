import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#ff304f', '#4094f1', '#27bf68', '#de2fff'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text 
            x={x} 
            y={y} 
            textAnchor={x > cx ? 'middle' : 'middle'} 
            dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function PieCharts({ chart }) {
    return (
        <ResponsiveContainer width="100%" aspect={1} maxHeight={230}>
            <PieChart width={500} height={500}>
                <Pie
                    data={chart}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={2}
                >
                    {chart.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip 
                    contentStyle={{ 
                        border: "1px solid #f0f0f0",
                        padding: "8px 15px 9px", 
                        borderRadius: "6px", 
                        background: "#fff",
                        boxShadow: "0px 12px 25px 0px rgb(0 0 0 / 12%)",
                    }}
                    cursor={{ fill: "transparent" }}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}
