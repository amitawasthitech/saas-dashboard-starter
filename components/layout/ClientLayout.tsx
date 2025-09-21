"use client"

import { useState } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import Rightbar from "./Rightbar"

export default function ClientLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [isRightbarOpen, setRightbarOpen] = useState(true)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 bg-gray-100 dark:bg-dark-card
          ${isSidebarOpen ? "" : "w-0"} overflow-hidden`}
      >
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Middle Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Topbar - Fixed */}
        <div className="sticky top-0 z-50">
          <Topbar
            toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
            toggleRightbar={() => setRightbarOpen(!isRightbarOpen)}
            isRightbarOpen={isRightbarOpen}
          />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-6 bg-white dark:bg-gray-950 max-465:w-[100vw]">
          {children}
        </div>
      </div>

      {/* Rightbar */}
      <div
        className={`transition-all duration-300 bg-gray-50 dark:bg-dark-card border-l
          ${isRightbarOpen ? "w-72" : "w-0"} overflow-hidden`}
      >
        <Rightbar />
      </div>
    </div>
  )
}
