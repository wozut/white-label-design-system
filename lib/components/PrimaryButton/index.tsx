import React, { ReactElement, ReactNode } from "react"
import styles from "./styles.module.css"

export function PrimaryButton({
  type = "button",
  onClick,
  children,
}: {
  type?: "submit" | "reset" | "button"
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}): ReactElement {
  return (
    <button type={type} className={styles["button"]} onClick={onClick}>
      {children}
    </button>
  )
}
