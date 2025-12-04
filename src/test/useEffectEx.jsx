import React, {useState, useEffect, use} from "react";

const UseEffectEx = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    console.log("rendering ui");

    useEffect(() => {
        console.log("useEffect - No Dep array - runs after every render");
    })

    useEffect(() => {
        console.log("useEffective[] - Empty Dep Array -runs only once after first render");
    }, [count]);

    useEffect(() => {
        console.log("useEffect[count] - Value in Dep Array - runs when only count updates");
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    }

    return(
        <div style={{textAlign:"center", marginTop:100}}>
            <h2>UseEffect Example</h2>
            <p>Count: {count}</p>

            <button onClick={increment}>
                Increase Count
            </button>

            <div style={{marginTop:20}}>
                <input
                    type="text"
                    placeholder="Enter some text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <p>You Typed : {text}</p>
            </div>
        </div>

    );
}

export default UseEffectEx;