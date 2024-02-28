import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className="Count_Value"> Counter App </h1> <p> Count : {count}</p>
      <button onClick={increment}> Increment </button>{" "}
      <button onClick={decrement}> Decremen </button>{" "}
    </div>
  );
};

export default App;
