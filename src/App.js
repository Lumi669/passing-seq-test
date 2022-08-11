import React from "react";

import BarChart from "./components/BarChart";
import "./App.css";

const App = () => {
  const data = {
    labels: ["3", "6", "5", "8", "2", "9", "8", "2"],
    datasets: [
      {
        label: "pass",
        data: [0, 0, 0, 0, 0, 0],
        borderWidth: 6,
        borderColor: "red",
        fill: false,
      },
      {
        label: "long-run",
        data: [5, 5, 5, 5],
        borderWidth: 6,
        borderColor: "green",
        fill: false,
      },
      {
        label: "steal",
        data: [28, 28, 28, 28, 28, 28, 28],
        borderWidth: 6,
        borderColor: "purple",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <BarChart data={data} />
    </div>
  );
};

export default App;
