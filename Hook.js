import React, {useState} from "react";


function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
        <div>
            <h2>MY Counter</h2>
            <p>{count}</p>
            <button onClick={ () => setCount(count + 1) }>tap</button>
            <button onClick={ () => setCount(count - 1) }>click</button>
            <button onClick={ () => setCount(0) }>default</button>
        </div>
        </>
    )
}

export default Counter;
