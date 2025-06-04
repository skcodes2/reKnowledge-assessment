
import { create } from 'zustand';
import type { EarthquakeData } from '../types/EarthquakeTypes';

type PaginatedDataState = {
  paginatedData: EarthquakeData[];
  setPaginatedData: (data: EarthquakeData[]) => void;
};

export const usePaginatedEarthquakes = create<PaginatedDataState>((set) => ({
  paginatedData: [],
  setPaginatedData: (data) => set({ paginatedData: data }),
}));
