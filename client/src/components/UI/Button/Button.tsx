/* eslint-disable react/require-default-props */
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
} from "react"
import styles from "./Button.module.scss"

const Button = ({
  onClick,
  children,
  className,
  type,
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  )
}
export default Button
