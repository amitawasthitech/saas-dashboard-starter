"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { month: "Jan", current: 13, previous: 8 },
  { month: "Feb", current: 9, previous: 18 },
  { month: "Mar", current: 11, previous: 14 },
  { month: "Apr", current: 15, previous: 11 },
  { month: "May", current: 20, previous: 16 },
  { month: "Jun", current: 19, previous: 22 },
]

export default function RevenueChart() {
  return (
    <div className="p-4 rounded-2xl shadow-md w-full bg-cardLight dark:bg-dark-card border border-gray-200 dark:border-[#2D2D2D] " style={{ flex: 1 }}>
      {/* Title + Legend */}
      <div className="flex items-center gap-6 mb-4 flex flex-wrap">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Revenue
        </h2>

        <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
          Current Week{" "}
          <span className="font-semibold ml-1 text-gray-900 dark:text-gray-100">
            $58,211
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <span className="w-2 h-2 rounded-full bg-blue-300 dark:bg-blue-400"></span>
          Previous Week{" "}
          <span className="font-semibold ml-1 text-gray-900 dark:text-gray-100">
            $68,768
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              className="stroke-gray-200 dark:stroke-gray-700"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              className="text-gray-700 dark:text-gray-300"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 10, 20, 30]}
              domain={[0, 30]}
              tickFormatter={(v) => `${v}M`}
              className="text-gray-700 dark:text-gray-300"
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                backgroundColor: "#F7F9FB",
              }}
              wrapperClassName="!bg-cardLight dark:!bg-cardDark !border !border-gray-200 dark:!border-gray-700 !text-gray-800 dark:!text-gray-200"
            />

            {/* Previous Week (blue smooth line) */}
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#93C5FD"
              strokeWidth={3}
              dot={false}
            />

            {/* Current Week (black/white line depending on theme) */}
            <Line
              type="monotone"
              dataKey="current"
              className="stroke-black dark:stroke-white"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
