import { useEffect, useState } from "react";
function Test () {
    const [count,setCount] = useState(0);
    const increase = () =>{
        setCount(count+1);
    }
    const deacrease = () =>{
        setCount(count-1);
    }
    useEffect(() => console.log("Component loaded!",count),[count])
    return <div>
        <button onClick={increase}>+</button>
        <button onClick={deacrease}>-</button>
    </div>
}

export default Test; 