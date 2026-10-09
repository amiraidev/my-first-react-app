    import { useState } from "react";

    function CreatePost() {
        const [title, setTitle] = useState("");
        const [body, setBody] = useState("");
        const sendPost = async (e) => {
            e.preventDefault();
            
            const response = await fetch("https://jsonplaceholder.typicode.com/posts"
                , {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: title,
                        body: body,
                        userId: 1,

                    })
                }
            )
            const data = await response.json();
            console.log(data);
            setTitle("")
            setBody("")
        }
        return (
            <div>
                <form onSubmit={sendPost}>
                    <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
                    <button type="submit">send</button>
                </form>
            </div>
        )
    }
    export default CreatePost;