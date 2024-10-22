import React, { ReactElement, ReactNode } from "react"
import styles from "./styles.module.css"

export function PrimaryButton({
  onClick,
  children,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}): ReactElement {
  return (
    <button className={styles["button"]} onClick={onClick}>
      {children}
    </button>
  )
}
