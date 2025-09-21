"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ShoppingCart,
  User,
  FileText,
  Users,
  Settings,
  Briefcase,
  BookOpen,
  Globe,
} from "lucide-react"
import { cn } from "../../app/lib/utils"

const sections = [
  {
    title: "Favorites",
    links: [
      { href: "/overview", label: "Overview", icon: LayoutDashboard },
      { href: "/projects", label: "Projects", icon: Briefcase },
    ],
  },
  {
    title: "Dashboards",
    links: [
      { href: "/dashboard", label: "Default", icon: LayoutDashboard },
      { href: "/orders", label: "Orders", icon: ShoppingCart },
      { href: "/projects", label: "Projects", icon: Briefcase },
      { href: "/online-courses", label: "Online Courses", icon: BookOpen },
    ],
  },
  {
    title: "Pages",
    links: [
      { href: "/user-profile", label: "User Profile", icon: User },
      { href: "/account", label: "Account", icon: Settings },
      { href: "/corporate", label: "Corporate", icon: Briefcase },
      { href: "/blog", label: "Blog", icon: FileText },
      { href: "/social", label: "Social", icon: Globe },
    ],
  },
]

export default function Sidebar({ isOpen }) {
  const pathname = usePathname()

  return (

    <aside
      className={cn(
        "h-screen bg-white dark:bg-dark-card border-r dark:border-gray-800 flex flex-col transition-all duration-300",
        isOpen ? "w-60" : "w-20"
      )}
      style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      {/* Logo */}

      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', }}>
        <Image src="/icons/ByeWind.svg" alt="ByeWind" width={24} height={24} />
        <div style={{ fontSize: '14px', fontWeight: '400' }}>ByeWind</div>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h3
              className={cn(
                "text-xs uppercase font-semibold text-gray-400 mb-2 transition-opacity",
                !isOpen && "opacity-0"
              )}
            >
              {section.title}
            </h3>
            <div className="flex flex-col space-y-1">
              {section.links.map(({ href, label, icon: Icon }) => {
                const active = pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      active
                        ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    <Icon size={18} />
                    <span
                      className={cn(
                        "truncate transition-opacity",
                        !isOpen && "opacity-0"
                      )}
                    >
                      {label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}
