import { ReactElement, ReactNode } from "react"
import styles from "./styles.module.css"

export function Button({ children }: { children: ReactNode }): ReactElement {
  return <button className={styles["button"]}>{children}</button>
}
