"use client"

import React, { useState, useEffect } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts"
import { useTheme } from "next-themes"

const DEFAULT_DATA = [
  { name: "Direct", value: 300.56 },
  { name: "Affiliate", value: 135.18 },
  { name: "Sponsored", value: 154.02 },
  { name: "E-mail", value: 48.96 },
]

const COLORS = ["#111827", "#34D399", "#A78BFA", "#60A5FA"]

// Label box slice ke upar
const ActiveLabel = ({ cx, cy, midAngle, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180
  const x = cx + (outerRadius + 12) * Math.cos(-midAngle * RADIAN)
  const y = cy + (outerRadius + 12) * Math.sin(-midAngle * RADIAN)

  return (
    <g>
      <foreignObject x={x - 20} y={y - 12} width={50} height={24}>
        <div className="bg-gray-900 text-white text-[10px] px-2 py-1 rounded-md shadow">
          {(percent * 100).toFixed(1)}%
        </div>
      </foreignObject>
    </g>
  )
}

export default function TotalSales({ data = DEFAULT_DATA }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // SSR render avoid karne ke liye blank card
    return <div className="w-full max-w-[14rem] h-[260px] rounded-2xl shadow-sm border" />
  }

  const currencyFmt = (v) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(v)

  return (
    <div
      className="
    rounded-2xl p-5 shadow-sm border w-full transition-colors duration-300
    max-w-[14rem] 
    max-792:w-full max-792:max-w-none
  "
      style={{
        backgroundColor: theme === "light" ? "#F7F9FB" : "#1f1f1f",
        borderColor: theme === "light" ? "#E5E7EB" : "#2D2D2D",
      }}
    >
      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Total Sales
      </h3>

      <div style={{ width: "100%", height: 160 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="60%"
              outerRadius="85%"
              startAngle={90}
              endAngle={-270}
              cornerRadius={12}     // ✅ right side rounded
              paddingAngle={5}      // ✅ left side thoda concave
              activeIndex={activeIndex}
              onMouseEnter={(_, idx) => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              activeShape={(props) => (
                <>
                  <Sector {...props} />   {/* ✅ slice normal render */}
                  <ActiveLabel {...props} /> {/* ✅ percent label upar */}
                </>
              )}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-3">
        {data.map((d, i) => (
          <div key={d.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ background: COLORS[i % COLORS.length] }}
              />
              <span className="text-sm text-gray-700 dark:text-gray-200">
                {d.name}
              </span>
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-200 font-medium">
              {currencyFmt(d.value)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
