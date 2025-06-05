import type { ScatterPlotProps } from '../../types/ScatterPlotType';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

import { usePaginatedEarthquakes } from '../../hooks/usePaginatedEarthquake';

const CustomCircle = (props: any) => {
  const { cx, cy, r = 6, payload } = props;
  const fill = payload.fill; // fallback color
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={fill}
      strokeWidth={1.5}
      className="hover:scale-1.2 hover:cursor-pointer"
    />
  );
};


export default function ScatterPlot({
  xAxisKey,
  xAxisLabel,
  yAxisKey,
  yAxisLabel,
}: ScatterPlotProps) {
  const { paginatedData: data, setFilteredData } = usePaginatedEarthquakes();

  const handleClick = (pointData: any) => {
    const filitered = data.filter((item => {
      return item.depth === pointData.payload.depth && item.mag === pointData.payload.mag;
    }));
    setFilteredData(filitered);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  return (
    <div className="bg-black border border-gold rounded-lg shadow-lg p-4">
      
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          <XAxis type="number" dataKey={xAxisKey} name={xAxisLabel} stroke="#FFD700" />
          <YAxis type="number" dataKey={yAxisKey} name={yAxisLabel} stroke="#FFD700" />
          <Tooltip
            labelFormatter={() => ""}
            contentStyle={{ backgroundColor: '#111', borderColor: '#FFD700', color: 'white', cursor: 'pointer' }}
            itemStyle={{ color: '#FFD700' , cursor: 'pointer' }}
            cursor={{ strokeDasharray: '3 3', cursor: 'pointer' }}
          />
          <Legend wrapperStyle={{ color: '#FFD700' }} />
          <Scatter
            name="Earthquakes"
            data={data}
            onClick={handleClick}
            shape={<CustomCircle />}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

