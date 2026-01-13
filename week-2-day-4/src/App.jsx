import { useState } from "react";
import Tabs from "./components/Tabs";

function App() {
  const [activeTabId, setActiveTabId] = useState(1);

  const tabs = [
    { id: 1, label: "Overview", content: "Overview content" },
    { id: 2, label: "Details", content: "Details content" },
    { id: 3, label: "Settings", content: "Settings content" }
  ];

  return (
    <div>
      <h1>Tabs Module</h1>
      <div>
        
      </div>
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabChange={setActiveTabId}
      />
    </div>
  );
}

export default App;
