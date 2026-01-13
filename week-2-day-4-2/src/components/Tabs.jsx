import Button from "./Button";

function Tabs({ tabs, activeTabId, onTabChange }) {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div>
      <div>
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

      {activeTab && (
        <div>
          <h4>{activeTab.label}</h4>
          <p>{activeTab.content}</p>
        </div>
      )}
    </div>
  );
}

export default Tabs;
