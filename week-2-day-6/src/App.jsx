import { useState } from 'react'
import Button from './components/Button'

function App() {

  const tabs = [
    {id:1, type:"error", text: "Not enough disk space"},
    {id:2, type:"info", text: "This is the info"},
  ]

  const [ activeFilter, setActiveFilter ] = useState("all")

  const filteredOptions = ['all', ...new Set(tabs.map(tab => tab.type))]
  console.log(filteredOptions)

  const filteredLogs = 
    activeFilter === 'all'
    ? tabs
    : tabs.filter(tab => (tab.type === activeFilter))

  return (
    <div>
      <h2>Filtered tabs with state</h2>
      <section>
        {filteredOptions.map(option => (
          <Button
            key={option}
            onClick={() => setActiveFilter(option)}
            isActive={activeFilter === option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
          </Button>
        ))}
      </section>
      <div>
        <div>
            {filteredLogs.map(tab => (
              <div key={tab.id}>
                <h4>{tab.text}</h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App


