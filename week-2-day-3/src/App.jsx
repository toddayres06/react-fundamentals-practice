import { useState } from 'react'
import Button from './components/Button'

function App() {

  const [activeTabId, setActiveTabId] = useState(null)

  const tabs = [
    {id: 1, label: "Button 1", content: "This is Content for Button 1"},
    {id: 2, label: "Button 2", content: "This is Content for Button 2"},
    {id: 3, label: "Button 3", content: "This is Content for Button 3"}
  ]

  const handleButtonClick = (id) => {
    setActiveTabId(prev => (prev === id ? null : id))
  }

  const activeTab = tabs.find(tab => tab.id === activeTabId)

  return (
    <div>
      <h1>Buttons and Tabs with state practice</h1>
      <section>
        {tabs.map(tab => (
          <Button
            key={tab.id}
            onClick={()=> handleButtonClick(tab.id)}
            isActive={activeTabId === tab.id}
            >{tab.label}
          </Button>
        ))}
      </section>
      <div>
        {activeTab &&
        <div>
          <h4>{activeTab.label}</h4>
          <p>{activeTab.content}</p>
        </div>
        }
      </div>
    </div>
  )
}

export default App