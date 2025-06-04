import type { EarthquakeData } from "./EarthquakeTypes";

export type ScatterPlotProps = {
  data: EarthquakeData[];
  xAxisKey: string;
  xAxisLabel: string;
  yAxisKey: string;
  yAxisLabel: string;
};
