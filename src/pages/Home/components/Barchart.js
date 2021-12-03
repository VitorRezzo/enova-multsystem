import React, { useState } from "react";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";

export const Barchart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [state] = useState({
    data: [
      {
        name: "Equipe A",
        uv: 20,
      },
      {
        name: "Equipe B",
        uv: 30,
      },
      {
        name: "Equipe C",
        uv: 25,
      },
      {
        name: "Equipe D",
        uv: 12,
      },
      {
        name: "Equipe E",
        uv: 28,
      },
    ],
  });

  const mouseEnter = (data, index) => {
    setActiveIndex(index);
  };

  const { data } = state;

  let activeItem = data[activeIndex];

  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer height={200}>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" onMouseOver={mouseEnter}>
            {data.map((entry, index) => (
              <Cell
                fill={index === activeIndex ? "#FEA443" : "#074973"}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p>{`Atendimentos da ${activeItem.name}: ${activeItem.uv}`}</p>
    </div>
  );
};
