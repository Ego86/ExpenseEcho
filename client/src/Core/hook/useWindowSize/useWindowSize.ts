"use client"

import { useEffect, useState } from "react"

const useWindowSize = () => {
  // Проверка, что код выполняется в клиентской среде
  const isClient = typeof window !== "undefined"

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  })

  useEffect(() => {
    if (!isClient) {
      return
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isClient]) // Добавляем зависимость isClient в useEffect

  return windowSize
}

export default useWindowSize
