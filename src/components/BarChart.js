import React from "react";
import Chart from "chart.js";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const BarChart = ({ data }) => {
  return (
    <Line
      data={data}
      height={900}
      width={400}
      options={{
        maintainAspectRatio: false,
        scales: {
          y: {
            display: true,
            beginAtZero: true,
            min: 0,
            max: 45,
            ticks: {
              font: {
                size: 29,
              },
              stepSize: 1,
              callback: function (value, index) {
                console.log(
                  "this.getLabelForValue(value) = ",
                  this.getLabelForValue(value)
                );

                if (
                  this.getLabelForValue(value) > 0 &&
                  this.getLabelForValue(value) <= 2
                ) {
                  return "pass";
                } else if (
                  this.getLabelForValue(value) > 4.5 &&
                  this.getLabelForValue(value) <= 6
                ) {
                  return "long-run";
                } else if (
                  this.getLabelForValue(value) > 28.5 &&
                  this.getLabelForValue(value) <= 30
                ) {
                  return "steal";
                } else if (this.getLabelForValue(value) < 0) {
                  return "";
                } else {
                  return this.getLabelForValue(value);
                }
              },
            },
          },
        },
        legend: {
          labels: {
            fontSize: 45,
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
