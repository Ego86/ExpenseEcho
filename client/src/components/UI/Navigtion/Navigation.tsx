/* eslint-disable import/no-self-import */
/* eslint-disable import/extensions */
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Text from "../Text/Text"
import { HTMLAttributes } from "react"
/* eslint-disable @typescript-eslint/no-unused-expressions */
interface ILinks {
  label: string
  href: string
}
const Navigation = ({
  navLinks,
  className,
}: {
  navLinks: ILinks[]
  className: string
}) => {
  const pathname = usePathname()

  return (
    <ol className={className}>
      {navLinks.map((item) => {
        return (
          <li
            key={item.label}
            className={pathname === item.href ? `"text-slate-200"` : ""}
          >
            <Link href={item.href}>
              <Text type="p">{item.label}</Text>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
export default Navigation
