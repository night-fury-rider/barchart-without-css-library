import "./App.css";
import BarChart from "./clubhouse/components/BarChart";
import { DASHBOARD } from "./strings-constants";
import { useEffect, useState } from "react";

function App() {
  const [currentTimeMessage, setCurrentTimeMessage] = useState();

  const chartData = [
    { id: "dep-1", name: "Legal", ticketCount: 32, color: "#3F888F" },
    { id: "dep-2", name: "Sales", ticketCount: 20, color: "#FFA420" },
    { id: "dep-3", name: "Engineering", ticketCount: 60, color: "#287233" },
    { id: "dep-4", name: "Manufacturing", ticketCount: 5, color: "#4E5452" },
    { id: "dep-5", name: "Maintenance", ticketCount: 14, color: "#642424" },
    {
      id: "dep-6",
      name: "Human Resourcing",
      ticketCount: 35,
      color: "#1D1E33",
    },
    { id: "dep-7", name: "Events", ticketCount: 43, color: "#E1CC4F" },
  ];

  useEffect(() => {
    setCurrentTimeMessage(
      `${DASHBOARD.currentTime}: ${new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}`
    );
  }, []);
  return (
    <div className="App">
      <BarChart chartData={chartData} />
    </div>
  );
}

export default App;
