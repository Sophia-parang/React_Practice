import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const change = step * count;
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + change);
  let label;
  if (change === 0) {
    label = "Today is";
  } else if (change > 0) {
    label = `${change} days from today is`;
  } else if (change < 0) {
    label = `${Math.abs(change)} days ago was`;
  }

  function handleMinusStep() {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }

  function handlePlusStep() {
    setStep((prevStep) => prevStep + 1);
  }

  function handleMinus() {
    setCount((prevCount) => prevCount - 1);
  }

  function handlePlus() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <div className="counter-box">
        <button onClick={handleMinusStep}>-</button>
        <p> Step : {step} </p>
        <button onClick={handlePlusStep}>+</button>
      </div>
      <div className="counter-box">
        <button onClick={handleMinus}>-</button>
        <p> Count : {count} </p>
        <button onClick={handlePlus}>+</button>
      </div>
      <div>
        <p>
          {label} {targetDate.toDateString()}
        </p>
      </div>
    </>
  );
}

export default App;
