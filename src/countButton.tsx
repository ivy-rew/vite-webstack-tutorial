import { useState } from "react";

function CounterButton({init=0}) {

    const [count, setCount] = useState(init);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
}

export default CounterButton