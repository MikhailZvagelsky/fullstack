import { useState } from 'react';

const Statistics = ({good, neutral, bad}) => {
  const count = good + neutral + bad;
  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {count}</p>
      <p>average {(good - bad)/count}</p>
      <p>positive {(good * 100) / count} %</p>
    </>
  );
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function createHandler(count, setCount) {
    return () => setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>give feedback</h1>
      <button onClick={createHandler(good, setGood)}>good</button>
      <button onClick={createHandler(neutral, setNeutral)}>neutral</button>
      <button onClick={createHandler(bad, setBad)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
