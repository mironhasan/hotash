import React from "react";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function RevenueChart({ chart }) {
    return (
        <ResponsiveContainer width="100%" aspect={1} maxHeight={385}>
            <AreaChart data={chart}>
                <CartesianGrid
                    stroke="#d1d1d1"
                    strokeDasharray="1 3"
                />
                <XAxis
                    tickSize={0}
                    tickMargin={15}
                    axisLine={false}
                    dataKey="month"
                    stroke="#5e5d72"
                    fontSize="11px"
                    fontWeight="500"
                    interval="preserveStartEnd"
                />
                <Tooltip
                    cursor={false}
                    contentStyle={{
                        background: "#fff",
                        borderRadius: "8px",
                        padding: "11px 18px 12px",
                        border: "1px solid #f0f0f0",
                        boxShadow: "0px 12px 25px 0px rgb(0 0 0 / 12%)",
                    }}
                    itemStyle={{
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "2px 0px",
                        textTransform: "capitalize",
                    }}
                    labelStyle={{
                        fontSize: "14px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                    }}
                />
                <defs>
                    <linearGradient id="blueOne" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="35%" stopColor="#2351af" stopOpacity={0.15} />
                        <stop offset="75%" stopColor="#2351af" stopOpacity={0.03} />
                    </linearGradient>
                    <linearGradient id="purpleTwo" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="35%" stopColor="#8c099f" stopOpacity={0.15} />
                        <stop offset="75%" stopColor="#8c099f" stopOpacity={0.03} />
                    </linearGradient>
                    <linearGradient id="greenThree" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="35%" stopColor="#18633a" stopOpacity={0.15} />
                        <stop offset="75%" stopColor="#18633a" stopOpacity={0.03} />
                    </linearGradient>
                </defs>
                <Area type="stepAfter" dataKey="invest" stackId="1" strokeWidth="3" stroke="#64b3f6" fill="url(#blueOne)" />
                <Area type="stepAfter" dataKey="earning" stackId="1" strokeWidth="3" stroke="#4eda89" fill="url(#greenThree)" />
                <Area type="stepAfter" dataKey="expense" stackId="1" strokeWidth="3" stroke="#ed68ff" fill="url(#purpleTwo)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}