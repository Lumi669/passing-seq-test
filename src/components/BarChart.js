import React from "react";
import Chart from "chart.js";
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
          y: {
            display: true,
            beginAtZero: true,
            min: -1,
            max: 45,
            ticks: {
              stepSize: 1,
              callback: function (value, index) {
                console.log(
                  "this.getLabelForValue(value) = ",
                  this.getLabelForValue(value)
                );

                if (this.getLabelForValue(value) == 1) {
                  console.log("passssss........");
                  return "pass";
                } else if (this.getLabelForValue(value) == 5) {
                  return "long-run";
                } else if (this.getLabelForValue(value) == 29) {
                  return "steal";
                } else {
                  return this.getLabelForValue(value);
                }
              },
            },
          },
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
                console.log(
                  "tooltipItem.datasetIndex = ",
                  tooltipItem.datasetIndex
                );
                if (tooltipItem.datasetIndex === 0) {
                  return "pass";
                }
                if (tooltipItem.datasetIndex === 1) {
                  return "long...... run";
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
