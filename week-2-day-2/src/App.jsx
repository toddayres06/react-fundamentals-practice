import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [activeTabId, setActiveTabId] = useState(null);

  const tabs = [
    { id: 1, label: "Tab 1", content: "This is content for Tab 1" },
    { id: 2, label: "Tab 2", content: "Here is Tab 2's content" },
    { id: 3, label: "Tab 3", content: "Content belonging to Tab 3" }
  ];

  const handleTabClick = (id) => {
    setActiveTabId(prev => (prev === id ? null : id));
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Tabs Using Shared State</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        {tabs.map(tab => (
          <Button
            key={tab.id}
            isActive={activeTabId === tab.id}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <div style={{ marginTop: "30px" }}>
        {activeTab && (
          <div>
            <h2>{activeTab.label}</h2>
            <p>{activeTab.content}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App