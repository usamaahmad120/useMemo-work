import { useState, useMemo } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function slowFunction(num) {
    console.log("🔄 Running slowFunction...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return num * 2;
  }

  // useMemo will only recalculate when `count` changes
  const slowResult = useMemo(() => {
    return slowFunction(count);
  }, [count]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Count: {count}</h2>
      <h3>Slow Result: {slowResult}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
