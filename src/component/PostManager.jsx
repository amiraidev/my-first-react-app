import { useEffect, useState } from "react"

function PostManager() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            if (!response.ok) {
                throw new Error("خطا در دریافت اطلاعات")
            }
            const data = await response.json()
            setPosts(data)
        }
        catch (error) {
            console.error("Error fetching data:", error)
        }
        finally {
            console.log("عملیات دریافت اطلاعات به پایان رسید")
        }
    }
    const postData = async (e) => {
         e.preventDefault();
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "My Post",
                    body: "This is the content of my post",
                    userId: 1
                })
            });
            if (!response.ok) {
                throw new Error("خطا در ارسال اطلاعات");
            }
            const data = await response.json();
            console.log("Data posted successfully:", data);
        } catch (error) {
            console.error("Error posting data:", error);
        }
        finally {
            console.log("عملیات ارسال اطلاعات به پایان رسید");
        }
    };

    return (
        <div>
        {posts.filter(post => post.userId === 1).map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
            </div>
        ))}
        <form action="" method="post" onSubmit={postData}>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="body" />
            <button type="submit">send</button>
        </form>
        </div>
    )
}
export default PostManager;