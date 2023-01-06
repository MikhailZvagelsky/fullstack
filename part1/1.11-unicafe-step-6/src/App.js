import { useState } from 'react';
import './App.css';

const StatisticLine = ({ text, value }) => 
<tr>
  <td>{text}</td><td>{value}</td>
</tr>;

const Statistics = ({ good, neutral, bad }) => {
  const count = good + neutral + bad;
  if (count === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <h1>statistics</h1>
      <table class='table'>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={count} />
          <StatisticLine text='average' value={(good - bad) / count} />
          <StatisticLine text='positive' value={((good * 100) / count) + ' %'} />
        </tbody>
      </table>
    </>
  );
};

const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>;

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
      <Button handler={createHandler(good, setGood)} text='good' />
      <Button handler={createHandler(neutral, setNeutral)} text='neutral' />
      <Button handler={createHandler(bad, setBad)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
