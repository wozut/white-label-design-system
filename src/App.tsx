import { ReactElement, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "normalize.css"
import "../styles/variables.css"
import "../styles/global.css"
import { PrimaryButton } from "../lib/components/PrimaryButton"
import { Label } from "../lib/components/Label"

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <PrimaryButton
          onClick={() => {
            setCount((count) => count + 1)
          }}
        >
          My Count is {count}
        </PrimaryButton>
        <Label primary={true}>My Count is {0 + 1}</Label>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PrimaryButton>My Button</PrimaryButton>
      <Label primary={true}>My Count is {0 + 1}</Label>
    </>
  )
}

export default App
