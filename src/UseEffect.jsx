import { useEffect, useState } from "react";
function Test() {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    }
    const deacrease = () => {
        setCount(count - 1);
    }
    useEffect(() => console.log("Component loaded!", count), [count])

    return <div>
        <button onClick={increase}>+</button>
        <button onClick={deacrease}>-</button>
        <Getdata />

    </div>
}

const Getdata = () => {
    const [getdata, setGetdata] = useState([]);
    const getPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data)
        setGetdata(data)
    }
    useEffect(() => getPosts, []);
    return (
        <div>
            <button onClick={getPosts}>دربافت اطلاعلات</button>

            {getdata.filter(data => data.userId === 1).map(data => <h3 key={data.id}>{data.title}</h3>)}
        </div>
    )
}
export default Test; 