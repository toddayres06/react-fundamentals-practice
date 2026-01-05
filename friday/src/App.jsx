import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import LogForm from './components/LogForm'
import LogList from './components/LogList'

function App() {
  const [logs, setLogs] = useState([])

  const addLog = (text) => {
    setLogs(prevLogs => [...prevLogs, text])
  }

  const removeLog = (index) => {
    setLogs(prevLogs => prevLogs.filter((_, i) => i !== index))
  }

  return (
    <div className="main-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="button-container">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </div>
      <div className="form-container">
        <LogForm addLog={addLog} />
        <LogList logs={logs} removeLog={removeLog}/>
      </div>
    </div>
  )
}


export default App
