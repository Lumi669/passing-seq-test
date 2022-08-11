import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const BarChart = ({ data }) => {
  return (
    <Line
      data={data}
      height={400}
      width={400}
      options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 45,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },

        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem, data) => {
                console.log(tooltipItem);
              },
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
