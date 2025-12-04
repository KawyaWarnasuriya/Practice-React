import React, {useState} from "react";

const SimpleCal =() => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div style={{textAlign:"center", marginTop:100}}>
            <h2>React Functional Component demo</h2>
            <p>Count: {count}</p>

            <button onClick={increment}>
                Increase Count
            </button>

            <button onClick={decrement}>
                Decrement Count
            </button>

            <button onClick={reset}>
                Reset Count
            </button>
        </div>
    );
}
export default SimpleCal;