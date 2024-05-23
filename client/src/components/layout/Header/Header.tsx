"use client"

import Image from "next/image"
import Link from "next/link"
// import { useCallback, useEffect, useState } from "react"
// import { Grip } from "lucide-react"
// import useWindowSize from "@/Core/hook/useWindowSize/useWindowSize"
import Logo from "@/../assets/Logo.svg"
import styles from "./Header.module.scss"

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={Logo} alt="Logo" width={50} />
      </Link>
      login
      {/* <DynamicNavigation navLinks={navItems} /> */}
    </header>
  )
}
export default Header
