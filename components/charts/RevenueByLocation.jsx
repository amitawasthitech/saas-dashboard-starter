"use client"

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const data = [
    { city: "New York", coordinates: [-74.006, 40.7128], revenue: 72 },
    { city: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: 39 },
    { city: "Sydney", coordinates: [151.2093, -33.8688], revenue: 25 },
    { city: "Singapore", coordinates: [103.8198, 1.3521], revenue: 61 },
]

// 100K = 100% reference
const maxRevenue = 100

export default function RevenueByLocation() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // SSR render avoid karne ke liye
        return <div className="w-[300px] h-[280px] rounded-2xl shadow-md border" />
    }

    // theme-specific map colors
    const mapFill = theme === "dark" ? "#1f2937" : "#F3F4F6"
    const mapStroke = theme === "dark" ? "#374151" : "#D1D5DB"
    const textColor = theme === "dark" ? "text-gray-200" : "text-gray-700"

    return (
        <div
            className="p-4 rounded-2xl shadow-md w-[226px] border max-792:flex max-792:w-[100%]"
            style={{
                backgroundColor: theme === "light" ? "#F7F9FB" : "#1a1a1a",
                borderColor: theme === "light" ? "#E5E7EB" : "#2D2D2D",
            }}
        >
            <h2 className={`text-lg font-semibold mb-3 ${textColor}`}>
                Revenue by Location
            </h2>

            {/* World Map */}
            <div className="h-40">
                <ComposableMap
                    projectionConfig={{ scale: 60 }}
                    width={300}
                    height={150}
                    style={{ width: "100%", height: "100%" }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={mapFill}
                                    stroke={mapStroke}
                                />
                            ))
                        }
                    </Geographies>

                    {data.map(({ city, coordinates }) => (
                        <Marker key={city} coordinates={coordinates}>
                            <circle r={4} fill="#2563EB" stroke="#fff" strokeWidth={1.5} />
                        </Marker>
                    ))}
                </ComposableMap>
            </div>

            {/* List of cities with revenue + progress bar */}
            <div className="mt-4 space-y-3">
                {data.map((item) => (
                    <div key={item.city}>
                        <div className={`flex justify-between text-sm ${textColor}`}>
                            <span>{item.city}</span>
                            <span className="font-semibold">{item.revenue}K</span>
                        </div>
                        <div
                            className={`w-full h-[2px] rounded-full mt-1 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                                }`}
                        >
                            <div
                                className="h-[2px] rounded-full"
                                style={{
                                    backgroundColor: "#A8C5DA",
                                    width: `${(item.revenue / maxRevenue) * 100}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
