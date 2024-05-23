/* eslint-disable max-len */
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"
import Header from "@/components/layout/Header/Header"
import Aside from "@/components/layout/Aside/Aside"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FinCalc",
  description: "finacial calculation",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-[300px] mb-[100px]">
          <div className="flex overflow-hidden justify-between min-h-full">
            <main className="w-full h-96">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
