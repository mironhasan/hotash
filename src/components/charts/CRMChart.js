import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function CRMChart({ dataKey, dataSet, variant }) {
    return (
        <ResponsiveContainer width="100%" aspect={1} maxHeight={200}>
            <BarChart data={ dataSet }>
                <CartesianGrid 
                    stroke="#ffffff"
                    strokeDasharray="1 3" 
                />
                <XAxis 
                    tickSize={0}
                    tickMargin={10}
                    axisLine={false}
                    dataKey={ dataKey.label }
                    fontSize="11px"
                    fontWeight="500"
                    interval="preserveStartEnd" 
                />
                <Tooltip 
                    cursor={ false }
                    contentStyle={{ 
                        background: "#fff",
                        borderRadius: "8px", 
                        padding: "11px 15px", 
                        border: "1px solid #f0f0f0",
                        boxShadow: "0px 12px 25px 0px rgb(0 0 0 / 12%)",
                    }}
                    itemStyle={{
                        fontSize: "14px",
                        fontWeight: "500",
                        textTransform: "capitalize",
                    }}
                    labelStyle={{
                        color: "#25b",
                        fontSize: "13px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                    }}
                />
                <defs>
                    <linearGradient id={ variant.name } x1="0" y1="0" x2="0" y2="1">
                        <stop offset="40%" stopColor={ variant.deep } stopOpacity={1} />
                        <stop offset="90%" stopColor={ variant.light } stopOpacity={0.9} />
                    </linearGradient>
                </defs>
                <Bar 
                    barSize={12} 
                    dataKey={ dataKey.title }
                    fill={`url(#${ variant.name })`} 
                    radius={30} 
                />
            </BarChart>
        </ResponsiveContainer>
    );
}