"use client"
import React, { useState } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table"
import { ordersData } from "../lib/ordersData"
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid"
import { Search } from "lucide-react"

export default function OrderList() {
  const [sorting, setSorting] = useState([])
  const [globalFilter, setGlobalFilter] = useState("")
  const [rowSelection, setRowSelection] = useState({})

  const columns = [
    {
      accessorKey: "id",
      header: "Order ID",
      cell: info => <span className="font-medium">{info.getValue()}</span>,
    },
    {
      accessorKey: "user.name",
      header: "User",
      cell: info => {
        const row = info.row.original
        return (
          <div className="flex items-center gap-2">
            <img src={row.user.avatar} className="w-8 h-8 rounded-full" />
            <span>{row.user.name}</span>
          </div>
        )
      },
    },
    { accessorKey: "project", header: "Project" },
    { accessorKey: "address", header: "Address" },
    {
      accessorKey: "date",
      header: "Date",
      cell: info => new Date(info.getValue()).toLocaleDateString(),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: info => {
        const status = info.getValue()
        const colors = {
          "In Progress": "text-blue-500",
          Complete: "text-green-500",
          Pending: "text-cyan-400",
          Approved: "text-yellow-400",
          Rejected: "text-gray-500 dark:text-gray-400",
        }
        return <span className={colors[status]}>{status}</span>
      },
    },
  ]

  const table = useReactTable({
    data: ordersData,
    columns,
    state: { sorting, globalFilter, rowSelection },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="p-6 w-full flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {/* Add new button */}
          <button className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-dark-card dark:text-white">
            +
          </button>

          {/* Sorting button */}
          <button
            className={`px-3 py-2 rounded-lg ${sorting[0]?.id === "date"
              ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
              : "bg-gray-100 dark:bg-dark-card dark:text-white"
              }`}
            onClick={() => {
              setSorting(old => {
                if (old.length && old[0].id === "date") {
                  if (old[0].desc === false) {
                    return [{ id: "date", desc: true }]
                  } else {
                    return []
                  }
                }
                return [{ id: "date", desc: false }]
              })
            }}
          >
            {{
              asc: <ChevronUpIcon className="w-4 h-4 inline" />,
              desc: <ChevronDownIcon className="w-4 h-4 inline" />,
            }[sorting[0]?.desc === false ? "asc" : "desc"] ?? null}
          </button>
        </div>
        <div className="relative" >
          <Search size={18} className="absolute left-2 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={globalFilter ?? ""}
            onChange={e => setGlobalFilter(e.target.value)}
            className="pl-8 border rounded-lg px-3 py-2 w-64 bg-white dark:bg-dark-card dark:text-white"
          />
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 border rounded-lg overflow-hidden dark:border-dark-card">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 dark:bg-dark-card sticky top-0 z-10">
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  <th className="p-2 bg-gray-50 dark:bg-dark-card">
                    <input
                      type="checkbox"
                      checked={table.getIsAllRowsSelected()}
                      onChange={table.getToggleAllRowsSelectedHandler()}
                    />
                  </th>
                  {headerGroup.headers.map(header => (
                    <th
                      key={header.id}
                      className="p-3 text-left cursor-pointer select-none text-gray-600 dark:text-gray-300"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="flex items-center gap-1">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: (
                            <ChevronUpIcon className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                          ),
                          desc: (
                            <ChevronDownIcon className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                          ),
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr
                  key={row.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-dark-card dark:border-gray-700"
                >
                  <td className="p-2">
                    <input
                      type="checkbox"
                      checked={row.getIsSelected()}
                      onChange={row.getToggleSelectedHandler()}
                    />
                  </td>
                  {row.getVisibleCells().map(cell => (
                    <td
                      key={cell.id}
                      className="p-3 text-gray-800 dark:text-gray-200"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 sticky bottom-0 bg-white dark:bg-dark-card py-2">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-3 py-1 border rounded disabled:opacity-50 dark:border-gray-700 dark:text-white"
          >
            {"<"}
          </button>
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <button
              key={i}
              onClick={() => table.setPageIndex(i)}
              className={`px-3 py-1 border rounded ${table.getState().pagination.pageIndex === i
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                : "bg-white dark:bg-dark-card dark:text-white"
                }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-3 py-1 border rounded disabled:opacity-50 dark:border-gray-700 dark:text-white"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  )
}
