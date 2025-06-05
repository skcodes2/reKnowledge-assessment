import { create } from 'zustand';
import type { EarthquakeData } from '../types/EarthquakeTypes';

type PaginatedDataState = {
  paginatedData: EarthquakeData[];
  filteredData: EarthquakeData[];
  selectedFilter: string;
  selectedSort: string;

  setPaginatedData: (data: EarthquakeData[]) => void;
  setFilteredData: (data: EarthquakeData[]) => void;
  setSelectedFilter: (value: string) => void;
  setSelectedSort: (value: string) => void;

  applyFilter: (filterType: string) => void;
  applySort: (sortType: string) => void;
};

export const usePaginatedEarthquakes = create<PaginatedDataState>((set, get) => ({
  paginatedData: [],
  filteredData: [],
  selectedFilter: "",
  selectedSort: "",

  setPaginatedData: (data) => set({ paginatedData: data }),
  setFilteredData: (data) => set({ filteredData: data }),
  setSelectedFilter: (value) => set({ selectedFilter: value }),
  setSelectedSort: (value) => set({ selectedSort: value }),


  applyFilter: (filterType) => {
    const { paginatedData, setSelectedFilter } = get();

    const filtered = paginatedData.filter((item) => {
      switch (filterType) {
        case "magLow":
          return item.mag < 5.0;
        case "magHigh":
          return item.mag >= 5.0;
        case "depthShallow":
          return item.depth < 5;
        case "depthDeep":
          return item.depth >= 5;
        default:
          return true;
      }
    });

    setSelectedFilter(filterType);
    set({ filteredData: filtered });
  },

  applySort: (sortType) => {
    const { filteredData, setSelectedSort } = get();
    const sorted = [...filteredData];

    switch (sortType) {
      case "magAsc":
        sorted.sort((a, b) => a.mag - b.mag);
        break;
      case "magDesc":
        sorted.sort((a, b) => b.mag - a.mag);
        break;
      case "depthAsc":
        sorted.sort((a, b) => a.depth - b.depth);
        break;
      case "depthDesc":
        sorted.sort((a, b) => b.depth - a.depth);
        break;
      case "rms":
        sorted.sort((a, b) => (a.rms ?? 0) - (b.rms ?? 0));
        break;
      default:
        break;
    }

    setSelectedSort(sortType);
    set({ filteredData: sorted });
  },
}));
