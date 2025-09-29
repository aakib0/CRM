import React from "react";
import { PanelLeft, CirclePlus } from "lucide-react";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <div className="flex items-center justify-between mb-2 sticky top-0 bg-gray-50 py-2 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <PanelLeft
          className="w-6 h-6 text-gray-700 active:text-gray-500 cursor-pointer touch-manipulation"
          onClick={onToggleSidebar}
        />
        <span className="text-sm font-medium text-gray-800">My Data</span>
      </div>
      <div className="flex items-center gap-1 bg-white px-2 sm:px-3 py-2 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50 touch-manipulation">
        <CirclePlus className="w-4 h-4 text-gray-700" />
        <span className="text-sm font-medium text-gray-800 hidden sm:block">Quick Access</span>
        <span className="text-sm font-medium text-gray-800 sm:hidden">Quick</span>
      </div>
    </div>
  );
};

export default Navbar;