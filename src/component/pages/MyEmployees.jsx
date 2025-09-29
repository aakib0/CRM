import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import {
  PanelLeft,
  CirclePlus,
  EllipsisVertical,
  SquarePen,
  Trash2,
} from "lucide-react";
import Pagination from "../Cards/Pagination";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/component/ui/dropdown-menu";

const MyEmployees = () => {
  const { onToggleSidebar } = useOutletContext();

  const customerDetails = [
    {
      id: "EMP001",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Telecaller",
    },
    {
      id: "EMP002",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Inactive",
      role: "Team Lead",
    },
    {
      id: "EMP003",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Senior Telecaller",
    },
     {
      id: "EMP004",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Telecaller",
    },
    {
      id: "EMP005",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Inactive",
      role: "Telecaller",
    },
    {
      id: "EMP006",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Inactive",
      role: "Team Lead",
    },
    {
      id: "EMP007",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Telecaller",
    },
    {
      id: "EMP008",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Senior Telecaller",
    },
    {
      id: "EMP009",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Inactive",
      role: "Telecaller",
    },
    {
      id: "EMP010",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Inactive",
      role: "Telecaller",
    },
  ];

  return (
    <div className="px-3 sm:px-6 pt-1 pb-6">
      
      <div className="flex items-center justify-between mb-2 sticky top-0 bg-gray-50 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <PanelLeft
            className="w-6 h-6 text-gray-700 active:text-gray-500 cursor-pointer touch-manipulation"
            onClick={onToggleSidebar}
          />
          <span className="text-sm font-medium text-gray-800">
            My Employees
          </span>
        </div>
      </div>

    
      <div className="mt-3 mb-4">
        <h1 className="text-lg sm:text-xl font-bold">My Employees</h1>
        <span className="text-gray-600 text-sm">
          Here&apos;s a list of your Employees
        </span>
      </div>

  
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4 mb-4">
        <div className="flex items-center gap-2 sm:gap-3 flex-1 overflow-x-auto pb-2 sm:pb-0">
          <div className="border border-gray-200 rounded px-3 sm:px-4 py-2 flex items-center bg-white min-w-[200px] flex-1 sm:flex-initial">
            <input
              type="text"
              placeholder="Filter Employees..."
              className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
            />
          </div>
          <button className="flex items-center gap-2 border border-gray-200 rounded px-3 sm:px-4 py-2 bg-white hover:bg-gray-50 whitespace-nowrap touch-manipulation">
            <CirclePlus className="text-gray-500 h-4 w-4" />
            <span className="text-sm font-medium">Status</span>
          </button>
          <button className="flex items-center gap-2 border border-gray-200 rounded px-3 sm:px-4 py-2 bg-white hover:bg-gray-50 whitespace-nowrap touch-manipulation">
            <CirclePlus className="text-gray-500 h-4 w-4" />
            <span className="text-sm font-medium">Role</span>
          </button>
        </div>
        <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 bg-blue-500 text-white font-medium text-[14px] whitespace-nowrap touch-manipulation">
          <CirclePlus className="text-white h-4 w-4" />
          Add New Employee
        </button>
      </div>

      
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="w-12 px-2 sm:px-4 py-3 text-left">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                  Employee ID
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                  Name & Email
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                  Date Created
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                  Role
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                  Password
                </th>
                <th className="w-12"></th>
              </tr>
            </thead>
            <tbody>
              {customerDetails.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-2 sm:px-4 py-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-2 sm:px-4 py-4 text-xs sm:text-sm font-medium text-gray-900">
                    {row.id}
                  </td>
                  <td className="px-2 sm:px-4 py-4 text-xs sm:text-sm text-gray-900">
                    <div className="flex flex-col">
                      <span className="font-medium">{row.name}</span>
                      <span className="text-gray-500 text-xs">{row.email}</span>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-4">
                    <span className="bg-pink-200 px-2 sm:px-3 rounded-xl py-1 text-xs font-medium whitespace-nowrap">
                      {row.dateCreated}
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 py-4">
                    <span
                      className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-xl whitespace-nowrap ${
                        row.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-xl whitespace-nowrap ${
                        row.role === "Telecaller"
                          ? "bg-blue-200 text-gray-700"
                          : "bg-yellow-100 text-gray-700 border border-gray-100"
                      }`}
                    >
                      {row.role}
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 py-4 text-xs sm:text-sm font-medium text-gray-700">
                    temp123
                  </td>
                  <td className="px-2 sm:px-4 py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-2 hover:bg-gray-100 rounded touch-manipulation">
                          <EllipsisVertical className="h-4 cursor-pointer text-gray-600" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-44 bg-white border border-gray-200 p-2 shadow-lg">
                        <Link to="/CRM/employee-details">
                          <div className="border rounded-xl border-gray-100 hover:bg-gray-50 mb-1 font-medium flex items-center">
                            <SquarePen className="h-4 ml-2" />
                            <DropdownMenuItem>
                              <span className="text-[14px]">View Details</span>
                            </DropdownMenuItem>
                          </div>
                        </Link>
                        <div className="border rounded-xl border-gray-100 hover:bg-gray-50 font-medium flex items-center text-red-600">
                          <Trash2 className="ml-2 h-4" />
                          <DropdownMenuItem>
                            <span className="text-[14px]">Delete Employee</span>
                          </DropdownMenuItem>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    
      <div className="mt-4">
        <Pagination />
      </div>
    </div>
  );
};

export default MyEmployees;