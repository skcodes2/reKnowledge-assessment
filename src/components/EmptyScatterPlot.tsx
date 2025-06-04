import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

type Props = {
  isLoading: boolean;
};

const dummyData = [{ depth: 0, mag: 0 }];

const EmptyScatterPlot: React.FC<Props> = ({ isLoading }) => {
  return (
    <div className="relative w-full h-[400px] bg-black border border-gold rounded-lg shadow-md p-2">
      {isLoading && (
        <LoadingSpinner />
      )}
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#333" />
          <XAxis type="number" dataKey="depth" name="Depth (km)" unit="km" stroke="#FFD700" />
          <YAxis type="number" dataKey="mag" name="Magnitude" stroke="#FFD700" />
          <Tooltip
            contentStyle={{ backgroundColor: '#111', borderColor: '#FFD700', color: 'white' }}
            itemStyle={{ color: '#FFD700' }}
          />
          <Legend wrapperStyle={{ color: '#FFD700' }} />
          <Scatter name="No Data" data={dummyData} fill="transparent" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmptyScatterPlot;
