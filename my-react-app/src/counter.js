import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);

    const increment = () => {
       setCount((c) => c + 1);
    };

    const decrement = () => {
        setCount((c) => c - 1);
     };

     const reset = () => {
        setCount((c) => c = 0 );
     };
     
     return (
        <>
          <div>
               Count: {count} <br />
              <button onClick={increment} className= "btn btn-lg btn-primary">+</button>
              <button onClick={decrement} className= "btn btn-lg btn-primary">-</button>
              <button onClick={reset} className= "btn btn-lg btn-primary">Reset</button>
          </div>
        </>
        
     );
};

export default Counter;