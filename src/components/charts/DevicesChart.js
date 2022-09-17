import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function DevicesChart({ chart }) {
    return (
        <ResponsiveContainer width="100%" aspect={1} maxHeight={350}>
            <BarChart data={chart}>
                <CartesianGrid 
                    stroke="#d1d1d1"
                    strokeDasharray="1 3" 
                />
                <XAxis 
                    tickSize={0}
                    tickMargin={10}
                    axisLine={false}
                    dataKey="month" 
                    stroke="#5e5d72"
                    fontSize="11px"
                    fontWeight="500"
                    interval="preserveStartEnd" 
                />
                <Tooltip 
                    cursor={ false }
                    labelStyle={{
                        fontSize: "14px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                    }}
                    contentStyle={{ 
                        background: "#fff",
                        borderRadius: "8px", 
                        padding: "8px 15px 9px", 
                        border: "1px solid #f0f0f0",
                        boxShadow: "0px 12px 25px 0px rgb(0 0 0 / 12%)",
                    }}
                    itemStyle={{
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "2px 0px",
                        textTransform: "capitalize",
                    }}
                />
                <Bar dataKey="desktop" stackId="a" fill="#2255bb" barSize={10} radius={0} />
                <Bar dataKey="mobile" stackId="a" fill="#4094f1" barSize={10} radius={[30, 30, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}