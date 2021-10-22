import React from "react";
import { PieChart, Pie, Cell,Tooltip, ResponsiveContainer } from "recharts";

export const Piechart = () => {
  const data = [
    { name: "Abertos", value: 30 },
    { name: "Atendidos", value: 20},
    { name: "Pendentes", value: 6 },
    { name: "Não Atendidos", value: 4 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#D91A2A"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
      
         
      
    <ResponsiveContainer  width="100%" height="100%">
       
      <PieChart  width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={true}
          label={renderCustomizedLabel}
          outerRadius={80}

          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
         
          
       </Pie>
       <Tooltip />
      
      </PieChart>
        
    </ResponsiveContainer>
   
  );
};
