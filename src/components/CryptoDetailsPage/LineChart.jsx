import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ coinHistory, color,timePeriod,setTimePeriod }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  console.log(coinHistory);
  for (let i = 0; i < coinHistory.data.history.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
  }
  const time = ["3h", "24h", "7d", "30d", "1y", "5y"];
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: color,
        borderColor: color,
        lineTension: 0.2,
        pointRadius: 2,
      },
    ],
  };
  console.log(data);
  const options = {
    scales: {
      yAxes: {
        ticks: {
          beginAtZero: true,
        },
      },
      tooltips: {
        mode: "point",
      },
    },
  };
  return (
    <div>
      <div className='flex justify-between items-center w-full'>
        <select
          className="rounded-md py-1 px-2 w-20 "
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          name="time-period"
          id="time-priod"
        >
          {time?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className='min-h-full'>
      <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
