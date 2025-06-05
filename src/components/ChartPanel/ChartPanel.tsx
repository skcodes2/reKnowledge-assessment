import ScatterPlot from "./ScatterPlot";
import { useEarthquakeContext } from "../../hooks/useEarthquakeContext";
import { usePaginatedEarthquakes } from "../../hooks/usePaginatedEarthquake";
import { useEffect, useState } from "react";
import { getFullName } from "../../utils/NameConversion";
import ChartController from "./ChartController";
import type { EarthquakeData } from "../../types/EarthquakeTypes";


export default function ChartPanel() {
  const [xAxisSelection, setXAxisSelection] = useState("depth");
  const [yAxisSelection, setYAxisSelection] = useState("mag");
  const { setPaginatedData, setFilteredData, setSelectedFilter, setSelectedSort } = usePaginatedEarthquakes();
  const data = useEarthquakeContext();
  const [reducedData, setReducedData] = useState<EarthquakeData[]>([]);


  useEffect(() => {
    setPaginatedData(reducedData);
    setFilteredData(reducedData);
    //reset table controller state
    setSelectedFilter("None");
    setSelectedSort("None");

  }, [reducedData, setPaginatedData]);

  return (
    <div className="bg-black font-body p-6 shadow-lg">
      <h2 className="text-3xl font-header text-white mb-2">Earthquake Scatter Plot</h2>

      <ChartController
        data={data}
        xAxisSelection={xAxisSelection}
        yAxisSelection={yAxisSelection}
        setXAxisSelection={setXAxisSelection}
        setYAxisSelection={setYAxisSelection}
        onDataUpdate={setReducedData}
      />

      <ScatterPlot
        xAxisLabel={getFullName(xAxisSelection)}
        yAxisLabel={getFullName(yAxisSelection)}
        xAxisKey={xAxisSelection}
        yAxisKey={yAxisSelection}
      />
    </div>
  );
}
