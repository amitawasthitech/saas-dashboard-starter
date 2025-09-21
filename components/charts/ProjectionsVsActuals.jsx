"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { useTheme } from "next-themes"

const data = [
  { month: "Jan", actual: 18, projection: 20 },
  { month: "Feb", actual: 20, projection: 24 },
  { month: "Mar", actual: 19, projection: 21 },
  { month: "Apr", actual: 22, projection: 28 },
  { month: "May", actual: 15, projection: 18 },
  { month: "Jun", actual: 21, projection: 25 },
]

export default function ProjectionsVsActuals() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="p-4 rounded-2xl shadow-md w-full bg-[#F7F9FB] dark:bg-dark-card transition-colors duration-300">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Projections vs Actuals
      </h2>
      <div className="w-full h-[200px]">
        <ResponsiveContainer>
          <BarChart data={data} barGap={-25}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={isDark ? "#374151" : "#E5E7EB"}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              stroke={isDark ? "#9CA3AF" : "#4B5563"}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 10, 20, 30]}
              domain={[0, 30]}
              tickFormatter={(v) => `${v}M`}
              stroke={isDark ? "#9CA3AF" : "#4B5563"}
            />
            <Tooltip
              formatter={(value) => [`${value}M`, ""]}
              labelFormatter={(label) => `Month: ${label}`}
              contentStyle={{
                backgroundColor: isDark ? "#1F2937" : "#fff",
                borderRadius: "0.5rem",
                border: "none",
                color: isDark ? "#E5E7EB" : "#111827",
              }}
            />

            {/* Projection (background bar) */}
            <Bar
              dataKey="projection"
              fill={isDark ? "#2563EB" : "#1E3A8A"}
              barSize={30}
              radius={[4, 4, 0, 0]}
              opacity={0.3}
            />

            {/* Actual (foreground bar) */}
            <Bar
              dataKey="actual"
              fill={isDark ? "#60A5FA" : "#93C5FD"}
              barSize={18} // thoda chhota taki andar fit ho jaaye
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
