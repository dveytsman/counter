import React, { useState } from "react";
import "./App.css";
function HookCounter() {
  const [hookCounter, setHookCounter] = useState(0);

  const handleClick = () => {
    setHookCounter(hookCounter + 1);
  };

  const handleReset = () => {
    setHookCounter(0);
  };
  return (
    <div className="counter">
      <h1>Counter using hooks</h1>
      <p className="display">{hookCounter}</p>
      <div className="buttons">
        <button className="button" onClick={handleClick}>
          increase count
        </button>
        <button className="button" onClick={handleReset}>
          reset hook
        </button>
      </div>
    </div>
  );
}

export default HookCounter;
