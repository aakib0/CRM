import React from "react";
import { Plus, ChevronDown, Columns2 } from "lucide-react";
import ExampleCard from "../Cards/Examplecard";
import DataTable from "./DataTable";
import NavBar from "../Cards/NavBar";
import { useOutletContext } from "react-router-dom";

const MyData = () => {
  const { onToggleSidebar } = useOutletContext();

  return (
    <div className="px-3 sm:px-6 pt-1 pb-6">
      <NavBar onToggleSidebar={onToggleSidebar} />
      <ExampleCard />
      <div className="p-2 sm:p-4 rounded-lg">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg text-sm font-medium overflow-x-auto">
            <button className="flex items-center gap-1 px-3 sm:px-4 py-2 bg-white rounded-md text-gray-800 shadow-sm whitespace-nowrap">
              Outline
            </button>
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 whitespace-nowrap">
              Past Performance
              <span className="bg-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded-full">3</span>
            </button>
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 whitespace-nowrap">
              Key Personnel
              <span className="bg-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded-full">2</span>
            </button>
            <button className="flex items-center px-3 sm:px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 whitespace-nowrap">
              Focus Documents
            </button>
          </div>
          <div className="flex gap-2 sm:gap-3 items-center overflow-x-auto pb-2 lg:pb-0">
            <button className="flex items-center gap-2 h-9 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium hover:bg-gray-50 whitespace-nowrap touch-manipulation">
              <Columns2 className="h-4 w-4" />
              Customize Columns
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 h-9 border border-gray-300 rounded-md bg-white text-sm font-medium px-3 py-2 hover:bg-gray-50 whitespace-nowrap touch-manipulation">
              <Plus className="h-4 w-4" />
              Add Section
            </button>
          </div>
        </div>
      </div>
      <DataTable />
    </div>
  );
};

export default MyData;