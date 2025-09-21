"use client"
import { Bell, UserPlus, Bug, FileText } from "lucide-react"
import Image from "next/image"

export default function Rightbar() {
  return (
    <aside className="w-72 dark:border-gray-800 bg-white dark:bg-dark-card p-4 flex flex-col overflow-y-auto"
      style={{ height: '100%' }}>
      {/* Notifications */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Notifications
        </h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <Bell className="w-4 h-4 text-indigo-500 mt-1" />
            <div>
              <p className="text-gray-800 dark:text-gray-200">
                You have a bug that needs…
              </p>
              <span className="text-xs text-gray-500">Just now</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <UserPlus className="w-4 h-4 text-green-500 mt-1" />
            <div>
              <p className="text-gray-800 dark:text-gray-200">
                New user registered
              </p>
              <span className="text-xs text-gray-500">59 minutes ago</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Bug className="w-4 h-4 text-red-500 mt-1" />
            <div>
              <p className="text-gray-800 dark:text-gray-200">
                You have a bug that needs…
              </p>
              <span className="text-xs text-gray-500">12 hours ago</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Activities */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Activities
        </h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <Image src="/icons/3.png" alt="user" width={28} height={28} className="rounded-full" />
            <div>
              <p className="text-gray-800 dark:text-gray-200">
                You have a bug that needs…
              </p>
              <span className="text-xs text-gray-500">Just now</span>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <Image src="/icons/6.svg" alt="user" width={28} height={28} className="rounded-full" />
            <div>
              <p className="text-gray-800 dark:text-gray-200">
                Released a new version
              </p>
              <span className="text-xs text-gray-500">59 minutes ago</span>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <Image src="/icons/1.svg" alt="user" width={28} height={28} className="rounded-full" />
            <div>
              <p className="text-gray-800 dark:text-gray-200">Submitted a bug</p>
              <span className="text-xs text-gray-500">12 hours ago</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Contacts */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Contacts
        </h3>
        <ul className="space-y-3 text-sm">
          {[
            { name: "Natali Craig", img: "/icons/1.svg" },
            { name: "Drew Cano", img: "/icons/1.svg" },
            { name: "Orlando Diggs", img: "/icons/3.png" },
            { name: "Andi Lane", img: "/icons/4.svg" },
            { name: "Kate Morrison", img: "/icons/5.svg" },
            { name: "Koray Okumus", img: "/icons/6.svg" },
          ].map((user) => (
            <li key={user.name} className="flex items-center gap-3">
              <Image
                src={user.img}
                alt={user.name}
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="text-gray-800 dark:text-gray-200">
                {user.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
