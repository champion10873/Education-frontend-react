import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  // ["Commute", 2],
  // ["Watch TV", 2],
  // ["Sleep", 7], // CSS-style declaration
];
const options = {
  title: "My Daily Activities",
  pieHole: 0.5,
  is3D: false,
};

export default function ChartMonth() {
  return (
    <div>
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
    />
    </div>
  );
}
