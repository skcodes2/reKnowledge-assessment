import ScatterPlot from "./ScatterPlot";
import { useEarthquakeContext } from "../hooks/useEarthquakeContext";
import { usePaginatedEarthquakes } from "../hooks/usePaginatedEarthquake";
import { useEffect, useMemo, useState } from "react";
import AxisSelector from "./AxisSelector";
import { getFullName } from "../utils/NameConversion";
import Pagination from "./Pagination";

export default function ChartPanel() {
  const [xAxisSelection, setXAxisSelection] = useState("depth");
  const [yAxisSelection, setYAxisSelection] = useState("mag");
  const { setPaginatedData } = usePaginatedEarthquakes();
  const data = useEarthquakeContext();

  const pageSize = 200;
  const maxPages = useMemo(() => Math.ceil(data.length / pageSize), [data]);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const reducedData = useMemo(
    () => data.slice(startIndex, startIndex + pageSize),
    [data, startIndex, pageSize]
  );

  useEffect(() => {
    setPaginatedData(reducedData);
  }, [reducedData, setPaginatedData]);

  return (
    <div className="bg-black font-body p-6  shadow-lg">
      <h2 className="text-3xl font-header text-white mb-2">Earthquake Scatter Plot</h2>

      <div className="flex justify-between items-center mb-4 sticky top-0 bg-black z-10">
        <div className="flex gap-4">
          <AxisSelector label="X-Axis" setFunction={setXAxisSelection} value={getFullName(xAxisSelection)} />
          <AxisSelector label="Y-Axis" setFunction={setYAxisSelection} value={getFullName(yAxisSelection)}/>
        </div>
        <Pagination
          currentPage={currentPage}
          maxPages={maxPages}
          onNextPage={() => setCurrentPage((prev) => Math.min(prev + 1, maxPages))}
          onPrevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        />
      </div>

      <ScatterPlot
        data={reducedData}
        xAxisLabel={getFullName(xAxisSelection)}
        yAxisLabel={getFullName(yAxisSelection)}
        xAxisKey={xAxisSelection}
        yAxisKey={yAxisSelection}
      />
    </div>
  );
}
