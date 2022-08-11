import React from "react";

import BarChart from "./components/BarChart";
import "./App.css";

const App = () => {
  const data = {
    labels: ["3", "6", "5", "8", "2"],
    datasets: [
      { fill: false },
      {
        label: "# of votes",
        data: [0, 0, 0, 0, 0, 0],
        borderWidth: 6,
      },
      {
        label: "Quantity",
        data: [5, 5, 5, 5],
        backgroundColor: "orange",
        borderColor: "red",
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
