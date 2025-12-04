import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function ReactFun(){
    const [count, setCount] = useState(0);

    console.log("rendering ui");

    useEffect(() => {
        console.log("component did mount or update");
        return()=>{
            console.log("component will unmount");
        }
    },[]);

    useEffect(() => {
        if(count > 0){
            console.log("component did update");
            console.log("new state", count);
        }
    }, [count]);

    return(
        <div style={{textAlign: "center", marginTop: 100}}>
            <h2>React Functional Component demo</h2>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </div>

    );
}

export default ReactFun;