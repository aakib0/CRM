import React from "react";
import { useOutletContext } from "react-router-dom";

const EmployeeDetail = () => {
  const { onToggleSidebar } = useOutletContext();

  const handleToggleSidebar = () => {
    onToggleSidebar();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-semibold">
        Employee Detail Page
      </h1>
      <button
        className="px-4 py-2 border rounded-md"
        onClick={handleToggleSidebar}
      >
        Toggle Sidebar
      </button>
    </div>
  );
};

export default EmployeeDetail;