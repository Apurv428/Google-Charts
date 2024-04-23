import "./App.css";
import AreaChart from "./Chart-Types/Area-chart/AreaChart";
import BarChart from "./Chart-Types/Bar-chart/BarChart";
import GeoChart from "./Chart-Types/GeoChart/GeoChart";

function App() {
  return (
    <div className="App">
      <AreaChart />
      <BarChart />
      <GeoChart />
    </div>
  );
}

export default App;
