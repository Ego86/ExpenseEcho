import { DetailedHTMLProps, InputHTMLAttributes, ReactElement } from "react"
import styles from "./Input.module.scss"

const Input = ({
  type,
  id,
  value,
  onChange,
  placeholder,
  style,
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.input} ${style}`}
    />
  )
}
export default Input
