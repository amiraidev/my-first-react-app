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
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const getPosts = async () => {
        setError(false)
        setLoading(true)
        try {
            
                const response = await fetch("https://jsonplaceholder.typicode.com/posts")
                if (!response.ok) {
                    throw new Error("ارور میده!!!")
                }
                const data = await response.json()
                console.log(data)
                setGetdata(data)
            
        }
        catch {
            
                setError(true)
                setGetdata([])
            
        }
        finally {
            setLoading(false)
            console.log("یک اتفاقی افتاد!")
        }
    }
    useEffect(() => { getPosts() }, []);
    return (
        <div>
            {loading && <p>در حال دریافت داده ها ...</p>}
            {error && <p>خطا در ردریافت داده ها...</p>}
            <button onClick={getPosts}>دربافت اطلاعلات</button>
            {getdata.filter(data => data.userId === 1).map(data => <h3 key={data.id}>{data.title}</h3>)}
        </div>
    )
}
export default Test;
