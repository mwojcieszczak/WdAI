import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Blog } from "./Blog";

interface ArticleProps {

}

const Article: React.FC<ArticleProps> = () => {
    const { id } = useParams()
    const [title, settitle] = useState("");
    const [body, setbody] = useState("");
    useEffect(() => {
        const blog_str = localStorage.getItem("blogs")
        if (blog_str == null || id == undefined) {
            settitle("Not found")
            return
        }
        else {

            const blogs: Blog[] = JSON.parse(blog_str).filter((blog: Blog) => blog.id == parseInt(id))
            if (blogs.length < 1) {
                settitle("Not found")
                return
            } else {
                settitle(blogs[0].title)
                setbody(blogs[0].body)
                return
            }
        }
    }, []);
    return (<>
        <h1>{title}</h1>
        <p>{body}</p>
    </>);
}

export default Article;