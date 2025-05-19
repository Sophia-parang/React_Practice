import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const totalDays = 100;

  const [commitDays, setCommitDays] = useState(() => {
    const saved = localStorage.getItem("simpleCommitTracker");
    return saved ? JSON.parse(saved) : Array(totalDays).fill(false);
  });

  useEffect(() => {
    localStorage.setItem("simpleCommitTracker", JSON.stringify(commitDays));
  }, [commitDays]);

  const toggleDay = (index) => {
    const updated = [...commitDays];
    updated[index] = !updated[index];
    setCommitDays(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧵 커밋 100일 챌린지</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gap: "5px",
          marginTop: "20px",
        }}
      >
        {commitDays.map((done, i) => (
          <button
            key={i}
            onClick={() => toggleDay(i)}
            style={{
              padding: "10px",
              backgroundColor: done ? "#4caf50" : "#eee",
              color: done ? "white" : "black",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {done ? "✅" : i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
export default App;
