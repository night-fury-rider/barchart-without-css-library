import { useState } from "react";
import BarCandle from "./BarCandle";
import "./barchart.css";
import { updateChartHeight } from "./BarCandleService";

const BarChart = ({ chartData }) => {
  const getBarTitle = (candleObj) =>
    candleObj?.name ? `${candleObj?.name}(${candleObj?.ticketCount})` : "";

  const [barchartData] = useState(updateChartHeight(chartData));

  return (
    <div className="barchart-container">
      {barchartData &&
        barchartData.map((candleObj) => (
          <BarCandle
            key={candleObj.id}
            candleColor={candleObj?.color || "red"}
            candleHeight={candleObj?.height}
            candleTitle={getBarTitle(candleObj)}
          />
        ))}
    </div>
  );
};

export default BarChart;
