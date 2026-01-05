import { useState } from "react"
import Header from "./components/Header"
import Button from "./components/Button"
import LogForm from "./components/LogForm"
import LogList from "./components/LogList"

function App() {
  const [logs, setLogs] = useState([])

  // 🟢 NEW: shared state for which button is active
  const [activeButtonId, setActiveButtonId] = useState(null)

  const buttonData = [
    { id: 1, label: "Button 1" },
    { id: 2, label: "Button 2" },
    { id: 3, label: "Button 3" }
  ]

  const addLog = (text) => {
    setLogs(prev => [...prev, text])
  }

  const removeLog = (index) => {
    setLogs(prev => prev.filter((_, i) => i !== index))
  }

  // 🟢 NEW: coordinator function for button clicks
  const handleButtonClick = (id, label) => {
    // 🟢 NEW: toggle logic using previous state
    setActiveButtonId(prev =>
      prev === id ? null : id
    )

    // 🟢 NEW: reuse existing log system
    addLog(`${label} clicked`)
  }

  return (
    <div>
      <Header />

      <section>
        {buttonData.map(button => {
          // 🟢 NEW: derive meaning (boolean) per button
          const isActive = activeButtonId === button.id

          return (
            <Button
              key={button.id}                 
              isActive={isActive}             
              onClick={() =>
                handleButtonClick(button.id, button.label)
              }                              
            >
              {button.label}
            </Button>
          )
        })}
      </section>

      <LogForm addLog={addLog} />
      <LogList logs={logs} removeLog={removeLog} />
    </div>
  )
}

export default App
