type PaginationProps = {
  currentPage: number;
  maxPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
};
export default function Pagination({
  currentPage,
  maxPages,
  onNextPage,
  onPrevPage,
}: PaginationProps) {
  return (
    <div className="flex justify-end items-center gap-4">
      <button
        className="px-4 py-1 bg-gold text-white border border-gold rounded transition disabled:opacity-50 hover:bg-yellow-400 hover:scale-110"
        onClick={onPrevPage}
        disabled={currentPage === 1}
        style={{ transition: "background 0.2s, transform 0.2s" }}
      >
        Previous
      </button>

      <span className="text-sm font-semibold text-white">
        Page {currentPage} of {maxPages}
      </span>

      <button
        className="px-4 py-1 bg-gold text-white border border-gold rounded transition disabled:opacity-50 hover:bg-yellow-400 hover:scale-110"
        onClick={onNextPage}
        disabled={currentPage === maxPages}
        style={{ transition: "background 0.2s, transform 0.2s" }}
      >
        Next
      </button>
    </div>
  );
}