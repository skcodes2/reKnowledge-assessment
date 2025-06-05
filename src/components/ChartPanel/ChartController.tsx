// components/ChartController.tsx
import AxisSelector from "./AxisSelector";
import Pagination from "./Pagination";
import { getFullName } from "../../utils/NameConversion";
import { useState, useMemo, useEffect } from "react";
import type { ChartControllerProps } from "../../types/ScatterPlotType";


export default function ChartController({
  data,
  xAxisSelection,
  yAxisSelection,
  setXAxisSelection,
  setYAxisSelection,
  onDataUpdate,
}: ChartControllerProps) {
  const pageSize = 200;
  const [currentPage, setCurrentPage] = useState(1);

  const maxPages = useMemo(() => Math.ceil(data.length / pageSize), [data]);
  const startIndex = (currentPage - 1) * pageSize;

  const reducedData = useMemo(() => {
    return data
      .slice(startIndex, startIndex + pageSize)
      .filter(
        (item) =>
          item[xAxisSelection as keyof typeof item] !== null &&
          item[yAxisSelection as keyof typeof item] !== null
      );
  }, [data, startIndex, pageSize, xAxisSelection, yAxisSelection]);

  // Update parent with latest reducedData when it changes
  useEffect(() => {
  onDataUpdate(reducedData);
}, [reducedData, onDataUpdate]);
  return (
    <div className="flex justify-between items-center mb-4 sticky top-0 bg-black z-10">
      <div className="flex gap-4">
        <AxisSelector
          label="X-Axis"
          setFunction={setXAxisSelection}
          value={getFullName(xAxisSelection)}
        />
        <AxisSelector
          label="Y-Axis"
          setFunction={setYAxisSelection}
          value={getFullName(yAxisSelection)}
        />
      </div>
      <Pagination
        currentPage={currentPage}
        maxPages={maxPages}
        onNextPage={() => setCurrentPage((prev) => Math.min(prev + 1, maxPages))}
        onPrevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      />
    </div>
  );
}
