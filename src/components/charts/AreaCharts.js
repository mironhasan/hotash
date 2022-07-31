import React from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AreaCharts({ chart}) {
    return (
        <ResponsiveContainer width="100%" aspect={1} maxHeight={400}>
            <AreaChart
                width={500}
                height={300}
                data={chart}
            >
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="35%" stopColor="#25b" stopOpacity={0.95} />
                        <stop offset="75%" stopColor="#25b" stopOpacity={0.3} />
                    </linearGradient>
                </defs>

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
                />
                <Area type="natural" dataKey="uv" stroke="#25b" strokeWidth="2" fill="url(#color)" />
            </AreaChart>
        </ResponsiveContainer>
    );
}