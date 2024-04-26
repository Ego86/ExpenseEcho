/* eslint-disable indent */
import { ITextProps } from "@/Core/interface"
import { Roboto_Slab } from "next/font/google"
import { DetailedHTMLProps, HTMLAttributes } from "react"

const robotoSlab = Roboto_Slab({
  weight: ["400", "600"],
  subsets: ["cyrillic"],
})
const Text = ({ type, className, children }: ITextProps) => {
  switch (type) {
    case "p":
      return (
        <p className={`${robotoSlab.className} ${className}`}>{children}</p>
      )
    case "h1":
      return (
        <h1 className={`${robotoSlab.className} ${className}`}>{children}</h1>
      )
    case "h2":
      return (
        <h2 className={`${robotoSlab.className} ${className}`}>{children}</h2>
      )
    case "h3":
      return (
        <h3 className={`${robotoSlab.className} ${className}`}>{children}</h3>
      )
    case "h4":
      return (
        <h4 className={`${robotoSlab.className} ${className}`}>{children}</h4>
      )
    case "h5":
      return (
        <h5 className={`${robotoSlab.className} ${className}`}>{children}</h5>
      )
    case "h6":
      return (
        <h6 className={`${robotoSlab.className} ${className}`}>{children}</h6>
      )
    case "i":
      return (
        <i className={`${robotoSlab.className} ${className}`}>{children}</i>
      )
    default:
      return (
        <div className={`${robotoSlab.className} ${className}`}>{children}</div>
      )
  }
}

export default Text
