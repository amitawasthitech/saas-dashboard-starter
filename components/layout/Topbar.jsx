"use client"
import {
  Bell,
  Search,
  Sun,
  Moon,
  Menu,
  PanelRightOpen,
  PanelRightClose,
} from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Topbar({ toggleSidebar, toggleRightbar, isRightbarOpen }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 py-3 border-b bg-white dark:bg-dark-card dark:border-gray-800">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Sidebar Toggle */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu size={20} />
        </button>

        {/* Breadcrumb - hide on mobile */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
          <span>Dashboards</span> /
          <span className="font-medium text-gray-900 dark:text-gray-100">
            Default
          </span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search */}
        <div className="hidden sm:block relative">
          <Search size={18} className="absolute left-2 top-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-indigo-500 w-40 md:w-56"
          />
        </div>

        {/* Mobile Search Icon */}
        <button className="sm:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
          <Search size={18} />
        </button>

        {/* Notifications */}
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
          <Bell size={18} />
        </button>

        {/* Dark mode toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        >
          {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Rightbar Toggle */}
        <button
          onClick={toggleRightbar}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isRightbarOpen ? (
            <PanelRightClose size={20} />
          ) : (
            <PanelRightOpen size={20} />
          )}
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
          A
        </div>
      </div>
    </header>
  )
}