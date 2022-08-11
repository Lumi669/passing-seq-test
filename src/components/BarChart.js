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
          y: [
            {
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 45,
                callback: function (value, index) {
                  console.log(this.getLabelForValue(index));
                  if (this.getLabelForValue(index) === 2) {
                    return "steal";
                  } else {
                    return "";
                  }
                },
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
                console.log(tooltipItem.datasetIndex);
                if (tooltipItem.datasetIndex === 0) {
                  return "pass";
                }
                if (tooltipItem.datasetIndex === 1) {
                  return "long run";
                }
                if (tooltipItem.datasetIndex === 2) {
                  return "steal";
                }
              },
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
