import React from "react";
import { Line } from "react-chartjs-2";

const BarChart = ({ data }) => {
  return (
    <Line
      data={data}
      height={100}
      width={400}
      options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }}
    />
  );
};

export default BarChart;
