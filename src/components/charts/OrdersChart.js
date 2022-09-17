import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#de2fff', '#4094f1', '#27bf68', '#ff304f', '#edb213'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fontSize="13px"
            fontWeight="500"
            fill="#fff"
            textAnchor={x > cx ? 'middle' : 'middle'}
            dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function OrdersChart({ chart }) {
    return (
        <ResponsiveContainer width="100%" aspect={1} maxHeight={200}>
            <PieChart>
                <Pie
                    data={chart}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    innerRadius={40}
                    dataKey="value"
                    paddingAngle="3"
                >
                    {chart.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip 
                    cursor={ false }
                    contentStyle={{ 
                        background: "#fff",
                        borderRadius: "8px", 
                        padding: "7px 12px 8px", 
                        border: "1px solid #f0f0f0",
                        boxShadow: "0px 12px 25px 0px rgb(0 0 0 / 12%)",
                    }}
                    itemStyle={{
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "2px 0px",
                        color: "#5e5d72",
                        textTransform: "capitalize",
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}