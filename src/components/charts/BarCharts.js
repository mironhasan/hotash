import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BarCharts({ chart }) {
    return (
        <ResponsiveContainer width="100%" aspect={1} maxHeight={400}>
            <BarChart
                width={500}
                height={300}
                data={chart}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval="preserveStartEnd" />
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
                <Legend verticalAlign="bottom" iconSize={12} iconType="circle" height={0}/>
                <Bar dataKey="profit" stackId="a" fill="#4094f1" barSize={35} radius={0} />
                <Bar dataKey="sales" stackId="a" fill="#2255bb" barSize={35} radius={[30, 30, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}