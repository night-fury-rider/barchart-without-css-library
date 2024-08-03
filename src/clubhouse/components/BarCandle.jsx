import "./barchart.css";

const BarCandle = ({ candleColor, candleHeight, candleTitle }) => {
  return (
    <div
      className="bar_candle"
      style={{ backgroundColor: candleColor, height: candleHeight }}
      title={candleTitle}
    ></div>
  );
};

export default BarCandle;
