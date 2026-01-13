import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [isActiveButton, setIsActiveButton] = useState(null)

  const buttonsData = [
    {id: 1, label: "Button 1"},
    {id: 2, label: "Button 2"},
    {id: 3, label: "Button 3"},
    {id: 4, label: "Button 4"}
  ]

  const handleButtonClick = (id) => {
    setIsActiveButton(prev => (prev === id ? null : id))
  }

  return (
    <div>
      <h1>Coding buttons and toggling state on 1/6/26</h1>
      <section>
        {buttonsData.map(button => (
          <Button
            key={button.id}
            onClick={() => handleButtonClick(button.id)}
            isActive={isActiveButton === button.id}>
              {button.label}
          </Button>
        ))}
      </section>
    </div>
  )
}

export default App

// onClick
// isActive
