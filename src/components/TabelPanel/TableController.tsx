import { usePaginatedEarthquakes } from "../../hooks/usePaginatedEarthquake";

export default function TableController() {
  const {
    filteredData,
    setFilteredData,
    paginatedData,
    applyFilter,
    applySort,
    selectedFilter,
    selectedSort,
    setSelectedFilter,
    setSelectedSort,
  } = usePaginatedEarthquakes();

  if (!filteredData.length) return null;

  return (
    <div className="flex flex-row gap-6 items-end bg-black pb-3 sticky top-0 z-100">
      <div className="w-48">
        <label className="block text-sm font-medium mb-1 text-white">Filter By</label>
        <select
          id="filterBySelector"
          className="w-full p-2 rounded-md bg-gray-900 border border-gold text-white hover:cursor-pointer focus:outline-none"
          value={selectedFilter}
          onChange={(e) => {
            const val = e.target.value;
            setSelectedFilter(val);
            applyFilter(val);
          }}
        >
          <option value="">None</option>
          <option value="magLow">Magnitude &lt; 5.0</option>
          <option value="magHigh">Magnitude ≥ 5.0</option>
          <option value="depthShallow">Depth &lt; 5km</option>
          <option value="depthDeep">Depth ≥ 5km</option>
        </select>
      </div>

      <div className="w-48">
        <label className="block text-sm font-medium mb-1 text-white">Sort By</label>
        <select
          id="sortBySelector"
          className="w-full p-2 rounded-md bg-gray-900 border border-gold text-white hover:cursor-pointer focus:outline-none"
          value={selectedSort}
          onChange={(e) => {
            const val = e.target.value;
            setSelectedSort(val);
            applySort(val);
          }}
        >
          <option value="">None</option>
          <option value="magAsc">Magnitude: Low → High</option>
          <option value="magDesc">Magnitude: High → Low</option>
          <option value="depthAsc">Depth: Shallow → Deep</option>
          <option value="depthDesc">Depth: Deep → Shallow</option>
          <option value="rms">RMS: Low → High</option>
        </select>
      </div>
      <button
        onClick={() => {
          setFilteredData(paginatedData);
          setSelectedFilter("None");
          setSelectedSort("None");
        }
        }
        className="px-4 py-2 bg-gray-900 text-white border border-gold rounded-md hover:bg-gray-800 transition"
      >
        Reset Table
      </button>
      
    </div>
  );
}
