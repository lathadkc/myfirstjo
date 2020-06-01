import React, { useState } from 'react'

function HookCounter2() {

    const [count, setCount] = useState(0);
    return (
        <div>
Count {count}
<button onClick = {() => setCount(count+1)} >INCREMENT</button>
<button onClick = {() => setCount(count-1)} >DECREMENT </button>
<button onClick = {()=> setCount(0)} >RESET</button>

        </div>
    )
}

export default HookCounter2
