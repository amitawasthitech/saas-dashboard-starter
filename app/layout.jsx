import "../styles/globals.css"
import { Providers } from "./providers"
import ClientLayout from "../components/layout/ClientLayout"

export const metadata = {
  title: "Juspay Dashboard",
  description: "Starter dashboard",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  )
}
