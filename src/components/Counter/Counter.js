import React, { useState } from "react";

function Counter() {
  const [counter, setCouter] = useState(0);

  const handleClick = () => {
    setCouter(counter + 1);
    console.log("it got clicked");
  };

  return (
    <button style={{ marginLeft: 20 }} onClick={handleClick}>
      {counter}
    </button>
  );
}

export default Counter;
