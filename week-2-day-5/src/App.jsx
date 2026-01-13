import { useState } from "react";
import Button from "./components/Button";

function App() {
  // 1️⃣ DATA (static for now)
  const logs = [
    { id: 1, type: "info", text: "App started" },
    { id: 2, type: "error", text: "Failed request" },
    { id: 3, type: "info", text: "User logged in" },
    { id: 4, type: "warning", text: "Low disk space" }
  ];

  // 2️⃣ STATE (user intent)
  const [activeFilter, setActiveFilter] = useState("all");

  // 3️⃣ DERIVED DATA (NOT state)
  const filteredLogs =
    activeFilter === "all"
      ? logs
      : logs.filter(log => log.type === activeFilter);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Filters & Derived Data</h1>

      {/* FILTER BUTTONS */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Button
          isActive={activeFilter === "all"}
          onClick={() => setActiveFilter("all")}
        >
          All
        </Button>

        <Button
          isActive={activeFilter === "info"}
          onClick={() => setActiveFilter("info")}
        >
          Info
        </Button>

        <Button
          isActive={activeFilter === "warning"}
          onClick={() => setActiveFilter("warning")}
        >
          Warning
        </Button>

        <Button
          isActive={activeFilter === "error"}
          onClick={() => setActiveFilter("error")}
        >
          Error
        </Button>
      </div>

      {/* FILTERED RESULTS */}
      <ul>
        {filteredLogs.map(log => (
          <li key={log.id}>
            <strong>{log.type.toUpperCase()}:</strong> {log.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
