// app/dashboard/page.jsx
'use client'
import StatCard from '../../components/ui/card'
import ProjectionsVsActuals from '../../components/charts/ProjectionsVsActuals'
import RevenueChart from '../../components/charts/RevenueChart'
import TotalSales from '../../components/charts/TotalSales'
import RevenueByLocation from '../../components/charts/RevenueByLocation'
import { useTheme } from 'next-themes'



export default function DashboardPage() {
  const { theme } = useTheme()
  console.log("Dashboard page rendered", theme);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Row 1: Title */}
      <div style={{ padding: '4px 8px' }}>
        <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-100">eCommerce</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {/* Row 2: Left = Stat card container (4 cards 2x2), Right = Projections (Bar) */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7 max-922:flex-col flex-row" style={{ display: 'flex', gap: '28px' }}>
          {/* Left child - StatCards container */}
          <div className="grid grid-cols-2 gap-6 w-full h-full max-792:flex max-792:flex-col max-792:gap-16">
            <StatCard
              title="Customers"
              value="3,781"
              change="+11.01%"
              positive
              bgColor="#E3F5FF"
            />
            <StatCard
              title="Orders"
              value="1,219"
              change="-0.03%"
              positive={false}
              bgColor="#F7F9FB"
            />
            <StatCard
              title="Revenue"
              value="$695"
              change="+15.03%"
              positive
              bgColor="#F7F9FB"
            />
            <StatCard
              title="Growth"
              value="30.1%"
              change="+6.08%"
              positive
              bgColor="#E5ECF6"
            />
          </div>

          {/* Right child - Chart */}
          <ProjectionsVsActuals />
        </div>


        {/* Row 3: Left = Revenue (Line chart)  (spans 2 cols), Right = Revenue by Location */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7 max-792:flex max-792:flex-col max-792:gap-16" style={{ display: 'flex', gap: '28px' }}>
          {/* Revenue (large line chart) */}
          <RevenueChart />
          {/* Revenue by Location (map + list) */}
          <RevenueByLocation />
        </div>

        {/* Row 4: Left = Top Selling Products (table span 2), Right = Total Sales (donut) */}
        <div className='max-792:flex max-792:flex-col max-792:gap-16'/* className="grid grid-cols-1 xl:grid-cols-3 gap-7 items-start" */ style={{ display: 'flex', gap: '28px' }}>
          {/* Top Selling Products (table) */}
          <div className="xl:col-span-2" style={{ flex: 2 }}>
            <div
              className="rounded-2xl p-6 shadow-sm border transition-colors duration-300
             bg-gray-50 dark:bg-dark-card
             border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Top Selling Products
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-gray-500 dark:text-gray-400">
                    <tr>
                      <th className="text-left py-3">Name</th>
                      <th className="text-left py-3">Price</th>
                      <th className="text-left py-3">Quantity</th>
                      <th className="text-left py-3">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800 dark:text-gray-200 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-4">ASOS Ridley High Waist</td>
                      <td className="py-4">$79.49</td>
                      <td className="py-4">82</td>
                      <td className="py-4">$6,518.18</td>
                    </tr>
                    <tr>
                      <td className="py-4">Marco Lightweight Shirt</td>
                      <td className="py-4">$128.50</td>
                      <td className="py-4">37</td>
                      <td className="py-4">$4,754.50</td>
                    </tr>
                    <tr>
                      <td className="py-4">Half Sleeve Shirt</td>
                      <td className="py-4">$39.99</td>
                      <td className="py-4">64</td>
                      <td className="py-4">$2,559.36</td>
                    </tr>
                    <tr>
                      <td className="py-4">Lightweight Jacket</td>
                      <td className="py-4">$20.00</td>
                      <td className="py-4">184</td>
                      <td className="py-4">$3,680.00</td>
                    </tr>
                    <tr>
                      <td className="py-4">Marco Shoes</td>
                      <td className="py-4">$79.49</td>
                      <td className="py-4">64</td>
                      <td className="py-4">$1,965.81</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>


          {/* Total Sales (Donut) */}
          <TotalSales />
        </div>
      </div>
    </div>
  )
}
