import { useState } from "react"
function Form() {
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const handlenName = (e) =>{
        e.preventDefault();
        console.log(name);
        console.log(age);
        setAge("")
        setName("")
        alert(`${name} ${age} ارسال شد`)
    }
    return(
        <form onSubmit={handlenName}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            <button type="submit">ارسال</button>
        </form>
)
}
export default Form;