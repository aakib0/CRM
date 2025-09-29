import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const Pagination = ({ rowsPerPage, setRowsPerPage }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 px-4 py-3 bg-white border border-gray-200 rounded-xl">
      <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="whitespace-nowrap">Rows per page</span>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 text-xs sm:text-sm min-w-[60px]"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
        <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
          Page 1 of 7
        </span>
        <div className="flex items-center gap-1">
          <button className="p-1 sm:p-2 hover:bg-gray-100 rounded border border-gray-300 touch-manipulation">
            <ChevronsLeft className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-1 sm:p-2 hover:bg-gray-100 rounded border border-gray-300 touch-manipulation">
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-1 sm:p-2 hover:bg-gray-100 rounded border border-gray-300 touch-manipulation">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 sm:p-2 hover:bg-gray-100 rounded border border-gray-300 touch-manipulation">
            <ChevronsRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;