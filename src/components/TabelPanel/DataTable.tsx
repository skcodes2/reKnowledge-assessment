import { usePaginatedEarthquakes } from "../../hooks/usePaginatedEarthquake";
import { useEffect, useRef, useState } from "react";
import EmptyDataTable from "./EmptyTable";
import type { EarthquakeData } from "../../types/EarthquakeTypes";

export default function DataTable() {
  const { filteredData, paginatedData, setPaginatedData } = usePaginatedEarthquakes();
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const columns = filteredData[0] ? Object.keys(filteredData[0]) : [];
 
  // Track scroll position
  useEffect(() => {
    const container = tableContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollRatio = container.scrollTop / container.scrollHeight;
      setShowScrollTop(scrollRatio > 0.02);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    tableContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!filteredData.length) {
    return <EmptyDataTable />;
  }

  const handleRowClick = (row: EarthquakeData) => {
    // Highlight the clicked row
    const highltightedData = paginatedData.map((item) => {
      if (row.id === item.id) {
        return { ...item, fill: "#FFFFFF" }
      }
      return item;
    })

    setPaginatedData(highltightedData);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={tableContainerRef}
        className="max-h-[50rem] no-scrollbar overflow-y-auto border border-gold font-body bg-black"
      >
        <table className="min-w-full text-sm text-left text-white">
          <thead className="bg-gray-900 sticky top-0 z-10 font-header text-gold uppercase tracking-wider">
            <tr>
              {columns.map((col) => (
                <th key={col} className="px-4 py-2 border-b border-gold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr
                key={index}
                className=" hover:scale-[1.01] hover:cursor-pointer hover:bg-[#111]"
                onClick={() => handleRowClick(row)}
              >
                {columns.map((col) => (
                  <td key={col} className="px-4 py-2 border-b border-gray-700">
                    {String(row[col as keyof typeof row])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="absolute top-20 z-1000 right-4 bg-white text-black px-3 py-2 rounded-full shadow-md hover:bg-yellow-400 transition"
          aria-label="Scroll to top"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}
