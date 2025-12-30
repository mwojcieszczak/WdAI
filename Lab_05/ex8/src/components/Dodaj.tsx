import { useNavigate } from "react-router-dom";
import { type Blog } from "./Blog"
import { useState } from "react";

interface DodajProps {

}

const Dodaj: React.FC<DodajProps> = () => {
    const [title, settitle] = useState("");
    const [body, setbody] = useState("");
    const navigate = useNavigate();
    const addBlog = () => {
        if (title == "" || body == "") {
            alert("uzupełnij!")
            return
        }


        const blog_str = localStorage.getItem("blogs")
        if (blog_str == null) {

            const blog: Blog = {
                id: 0,
                title: title,
                body: body,
            }

            localStorage.setItem("blogs", JSON.stringify([blog]))
        } else {
            const blogs: Blog[] = JSON.parse(blog_str)

            const blog: Blog = {
                id: blogs.length,
                title: title,
                body: body,
            }

            blogs.push(blog)

            localStorage.setItem("blogs", JSON.stringify(blogs))
        }
        return navigate("/blog")

    }
    return (<>
        <form action={addBlog}>
            <input type="text" onChange={e => settitle(e.target.value)} />
            <input type="text" onChange={e => setbody(e.target.value)} />
            <button>Dodaj</button>
        </form>
    </>);
}

export default Dodaj;