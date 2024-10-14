import {ReactElement, ReactNode} from "react";
import styles from "./styles.module.css"

export function Label(props: { primary: boolean, children: ReactNode }): ReactElement {
    const background = props.primary ? styles.primary : styles.secondary;
    return <label className={`${styles.label} ${background}`}>{props.children}</label>
}