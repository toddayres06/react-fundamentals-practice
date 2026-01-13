import Tabs from './components/Tabs'
import { useState } from 'react'

function App() {

  const [activeTabId, setActiveTabId] = useState(1)

  const tabs = [
    {id: 1, label: "Button 1", content: "Dashboard"},
    {id: 2, label: "Button 2", content: "Main Content"},
    {id: 3, label: "Button 3", content: "Settings"}
  ]

  return (
    <div>
      <h2>Coding tabs & buttons with state</h2>
      <div>
        <Tabs
          tabs={tabs}
          activeTabId={activeTabId}
          onTabChange={setActiveTabId}
         />
      </div>
    </div>
  )
}

export default App