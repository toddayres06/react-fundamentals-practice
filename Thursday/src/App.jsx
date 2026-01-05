import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import LogForm from './components/LogForm'
import LogList from './components/LogList'

function App() {

  const [ logs, setLogs] = useState([])

  const addLog = (text) => {
    setLogs(prevLogs => [...prevLogs, text])
  }

  const removeLog = (index) => {
    setLogs(prevLogs => prevLogs.filter((_, i) => i !== index))
  }

  return (
    <div className="main-container">
      <div>
        <Header />
      </div>
      <div className="button-container">
        <Button onClick={() => console.log("Button 1 clicked")}>Button 1</Button>
        <Button onClick={() => console.log("Button 2 clicked")}>Button 2</Button>
        <Button onClick ={() => console.log("Button 3 clicked")}>Button 3</Button>
      </div>
      <div className="log-container">
        <LogForm addLog={addLog} />
        <LogList logs={logs} removeLog={removeLog} />
      </div>
    </div>
  )
}


export default App
