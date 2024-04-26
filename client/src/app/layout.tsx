/* eslint-disable max-len */
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"
import Image from "next/image"
import Header from "@/components/layout/Header/Header"
import Ellipse from "@/../../assets/Ellipse 9.svg"
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
        <div className="mx-[300px] mb-[100px] h-100%">
          <header className=" w-full">
            <Header />
          </header>
          <div className="flex justify-between">
            <Aside />
            <main className="bg-[#fff3] w-full h-[100vh] shadow-[#0f3c66b8] shadow-md">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
