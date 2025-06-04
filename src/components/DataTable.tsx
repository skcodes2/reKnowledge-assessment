import { usePaginatedEarthquakes } from "../hooks/usePaginatedEarthquake";
import { useEffect, useRef, useState } from "react";

export default function DataTable() {
  const { paginatedData } = usePaginatedEarthquakes();
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const columns = paginatedData[0] ? Object.keys(paginatedData[0]) : [];

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

  if (!paginatedData.length) {
    return <div className="text-center text-gold py-8">No data available.</div>;
  }

  return (
    <div className="relative">
      <div
        ref={tableContainerRef}
        className="max-h-[50rem] no-scrollbar overflow-y-auto border border-gold rounded font-body bg-black"
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
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className=" hover:scale-[1.01] hover:cursor-pointer hover:bg-[#111]"
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
          className="absolute top-20 right-4 bg-white text-black px-3 py-2 rounded-full shadow-md hover:bg-yellow-400 transition"
          aria-label="Scroll to top"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}
