import Button from "./Button";

function Tabs({ tabs, activeTabId, onTabChange }) {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        {tabs.map(tab => (
          <Button
            key={tab.id}
            isActive={activeTabId === tab.id}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <div>
        <h2>{activeTab.label}</h2>
        <p>{activeTab.content}</p>
      </div>
    </div>
  );
}

export default Tabs;
