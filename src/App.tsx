import { ReactElement, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { PrimaryButton } from "../lib/components/Button"
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
          count is {count}
        </PrimaryButton>
        <Label primary={true}>My Label</Label>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PrimaryButton>My Button</PrimaryButton>
      <Label primary={true}>My Label</Label>
    </>
  )
}

export default App
