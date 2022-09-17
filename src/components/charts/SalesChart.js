import React from "react";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function SalesChart({ chart }) {
    return (
        <ResponsiveContainer width="100%" aspect={1} maxHeight={225}>
            <AreaChart data={chart}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="35%" stopColor="#2351af" stopOpacity={0.95} />
                        <stop offset="75%" stopColor="#2351af" stopOpacity={0.3} />
                    </linearGradient>
                </defs>
                <CartesianGrid stroke="#4094f1" strokeDasharray="1 3" />
                <XAxis hide={true} dataKey="week" />
                <Tooltip
                    cursor={false}
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
                <Area type="natural" dataKey="sale" stroke="#2b77e5" strokeWidth="2" fill="url(#color)" />
            </AreaChart>
        </ResponsiveContainer>
    );
}