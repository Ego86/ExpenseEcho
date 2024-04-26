import { useEffect, useMemo, useState } from "react"

export default function useRandomId(): string | unknown {
  const allString: string =
    "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
  const [id, setId] = useState<Array<string>>([])
  const lengthId = 15
  try {
    for (let i = 0; i < lengthId; i += 1) {
      const randomIndex = Math.floor(Math.random() * allString.length)
      setId((prev) => [...prev, allString[randomIndex]])
    }
    if (id.length < lengthId) {
      throw new Error("the error is small the length of the id")
    }
    return id.join("")
  } catch (error) {
    console.error(error)
    return error
  }
}
