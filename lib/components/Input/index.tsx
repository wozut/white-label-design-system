import React, { ReactElement } from "react"

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>): ReactElement {
  return <input {...props} />
}
