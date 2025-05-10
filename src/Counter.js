import { useState } from "react";
 
function Counter () {

    const [count, setCount] = useState (0);

    return(
        <div className="Counter">
            <h2>Counter: {count}</h2>
            <button onClick ={() => setCount( count + 1)}>Click me!</button>
        </div>
    );
}

export default Counter;