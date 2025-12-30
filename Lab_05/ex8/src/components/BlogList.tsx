import { useEffect, useState } from "react";
import BlogListItem from "./BlogListItem";
import { useNavigate } from "react-router-dom";

interface BlogListProps {

}

const BlogList: React.FC<BlogListProps> = () => {
    const [blogs, setblogs] = useState([]);
    const [blogitems, setblogitems] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const blog_str = localStorage.getItem("blogs")
        if (blog_str == null) return
        else setblogs(JSON.parse(blog_str))
    }, []);
    useEffect(() => {
        setblogitems(blogs.map(blog => <BlogListItem title={blog.title} id={blog.id} />))
    }, [blogs]);
    return (<>
        {blogitems}
        <button onClick={() => navigate("/dodaj")}>dodaj</button>
    </>);
}

export default BlogList;