import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

export default function AnalyticsChart({ variant, dataSet, dataKey }) {
    return (
        <ResponsiveContainer width="100%" aspect={1} maxHeight={40}>
            <LineChart data={ dataSet }>
                <Tooltip 
                        contentStyle={{ 
                        border: "1px solid #f0f0f0",
                        padding: "8px 15px 9px", 
                        borderRadius: "6px", 
                        background: "#fff",
                        boxShadow: "0px 12px 25px 0px rgb(0 0 0 / 12%)",
                    }}
                />
                <Line 
                    type="monotone" 
                    dot={false} 
                    dataKey={ dataKey }
                    stroke={ variant }
                    strokeWidth="4" 
                />
            </LineChart>
        </ResponsiveContainer>
    )
}