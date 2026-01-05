import { useState } from "react"
import "./App.css"

import Header from "./components/Header"
import Button from "./components/Button"
import LogForm from "./components/LogForm"
import LogList from "./components/LogList"

function App() {
  const [logs, setLogs] = useState([])

  // Static button configuration (UI-only data)
  const buttonData = [
    { id: 1, label: "Button 1" },
    { id: 2, label: "Button 2" },
    { id: 3, label: "Button 3" }
  ]

  // Add a new log entry
  const addLog = (text) => {
    setLogs((prevLogs) => [...prevLogs, text])
  }

  // Remove a log by index
  const removeLog = (index) => {
    setLogs((prevLogs) => prevLogs.filter((_, i) => i !== index))
  }

  return (
    <div className="container-main">
      <header className="header-container">
        <Header />
      </header>

      <section className="button-container">
        {buttonData.map((button, index) => (
          <Button
            key={index}
            onClick={() => console.log(`${button.label} clicked`)}
          >
            {button.label}
          </Button>
        ))}
      </section>

      <section className="form-container">
        <LogForm addLog={addLog} />
        <LogList logs={logs} removeLog={removeLog} />
      </section>
    </div>
  )
}

export default App
