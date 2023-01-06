import { useState } from 'react';


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function createClickHandler(count, setCount) {
    return () => setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>give feedback</h1>
      <button onClick={createClickHandler(good, setGood)}>good</button>
      <button onClick={createClickHandler(neutral, setNeutral)}>neutral</button>
      <button onClick={createClickHandler(bad, setBad)}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
}

export default App;
