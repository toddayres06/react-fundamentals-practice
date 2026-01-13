import { useState } from 'react';
import Button from './components/Button';

function App() {
  // State to track which button is active
  const [activeButtonId, setActiveButtonId] = useState(null);

  // Array of buttons
  const buttonsData = [
    { id: 1, label: "Button 1" },
    { id: 2, label: "Button 2" },
    { id: 3, label: "Button 3" }
  ];

  // Named handler for button clicks
  const handleButtonClick = (id) => {
    setActiveButtonId(prev => (prev === id ? null : id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Week 2 - Day 1: Active Button State</h1>
      <section style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        {buttonsData.map(button => (
          <Button
            key={button.id}
            onClick={() => handleButtonClick(button.id)}
            isActive={activeButtonId === button.id}
          >
            {button.label}
          </Button>
        ))}
      </section>
    </div>
  );
}

export default App;
