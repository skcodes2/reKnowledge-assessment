import type { ScatterPlotProps } from '../types/ScatterPlotType';
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



const CustomCircle = (props: any) => {
  const { cx, cy, r = 5, fill = '#FF8C00' } = props;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={fill}
      
      strokeWidth={1.5}
      className=" hover:scale-1.2 hover:cursor-pointer"
    />
  );
};

export default function ScatterPlot({
  data,
  xAxisKey,
  xAxisLabel,
  yAxisKey,
  yAxisLabel,
}: ScatterPlotProps) {
  const handleClick = (pointData: any) => {
    console.log('Clicked data point:', pointData);
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
            fill="#FF8C00"
            onClick={handleClick}
            shape={<CustomCircle />}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

