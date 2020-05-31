import React, { useState, useEffect } from 'react'

function HookCounter1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('defaultValue');
    useEffect(() => {
        console.log("USE EFFECT CALLED");
        document.title = `u clicked ${count} times`
        
      },[count])
      
    return (
        <div>
<button onClick = {() => (setCount(count+1))}>Count {count}</button>
<input type = "text" value = {name} onChange = {(e) =>  setName(e.target.value)} />

        </div>
    )
}

export default HookCounter1
