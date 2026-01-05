import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import LogForm from './components/LogForm'
import LogList from './components/LogList'

function App() {
  const [logs, setLogs] = useState([])

  const buttonData = [
    {id: 1, label: "Button 1"},
    {id: 2, label: "Button 2"},
    {id: 3, label: "Button 3"}
  ]

  const addLog = (text) => {
    setLogs(prevLogs => [...prevLogs, text])
  }

  const removeLog = (index) => {
    setLogs(prevLogs => prevLogs.filter((_, i) => i !== index))
  }

  return (
    <div>
      <Header />

      <section>
        {buttonData.map((button, index) => (
          <Button 
            key={button.id}
            onClick={() => console.log(`clicked ${button.label}`)}
            >Button {button.label}
          </Button>
        ))}
      </section>

      <div>
        <LogForm addLog={addLog} />
        <LogList logs={logs} removeLog={removeLog}/>
      </div>
    </div>
  )
}

export default App