import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LogForm from './components/LogForm'
import LogList from './components/LogList'
import Button from './components/Button'

function App() {

  const [logs, setLogs] = useState([])

  const addLog = (text) => {
    setLogs(prevLogs => [...prevLogs, text])
  }

  const deleteLog = (index) => {
    setLogs(prevLogs => prevLogs.filter((_, i) => i !== index))
  }
  
  return (
    <div className="container-main">
      <Header />
      <div>
        <Button onClick={() => console.log('Button 1 Clicked')}>Button 1</Button>
        <Button onClick={() => console.log('Button 2 Clicked')}>Button 2</Button>
        <Button onClick={() => console.log('Button 3 Clicked')}>Button 3</Button>
      </div>
      <LogForm onAddLog={addLog} />
      <LogList logs={logs} onDelete={deleteLog}/>
    </div>
  )
}

export default App

