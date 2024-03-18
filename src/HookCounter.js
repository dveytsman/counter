import React, { useState } from "react";
function HookCounter() {
  const [hookCounter, setHookCounter] = useState(0);

  const handleClick = () => {
    setHookCounter(hookCounter + 1);
  };

  const handleReset = () => {
    setHookCounter(0);
  };
  return (
    <div>
      <h1>Counter using hooks</h1>
      <p>{hookCounter}</p>
      <button onClick={handleClick}>increase count</button>
      <button onClick={handleReset}>reset hook</button>
    </div>
  );
}

export default HookCounter;
