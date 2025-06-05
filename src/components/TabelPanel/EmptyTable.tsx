import { numericFieldLabels } from "../../utils/NameConversion";

const tableHeaders = Object.keys(numericFieldLabels);
export default function EmptyDataTable() {
  return (
    <div className="max-h-[50rem] overflow-y-auto no-scrollbar border border-gold rounded font-body bg-black">
      <table className="min-w-full text-sm text-left text-white">
        <thead className="bg-gray-900 sticky top-0 z-10 font-header text-gold uppercase tracking-wider">
          <tr>
            {tableHeaders.map((col) => (
              <th key={col} className="px-4 py-2 border-b border-gold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td colSpan={tableHeaders.length} className="py-8 text-gold italic">
              No data available.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
