import type { EarthquakeData } from "./EarthquakeTypes";

export type ScatterPlotProps = {
  xAxisKey: string;
  xAxisLabel: string;
  yAxisKey: string;
  yAxisLabel: string;
};
export type ChartControllerProps = {
  data: EarthquakeData[];
  xAxisSelection: string;
  yAxisSelection: string;
  setXAxisSelection: (value: string) => void;
  setYAxisSelection: (value: string) => void;
  onDataUpdate: (reducedData: EarthquakeData[]) => void;
};