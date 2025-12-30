import { Link } from "react-router-dom";

interface BlogListItemProps {
    title: string,
    id: number
}

const BlogListItem: React.FC<BlogListItemProps> = ({ title, id }) => {
    return (<>
        <div>
            <Link to={`/article/${id}`}>
                <p>
                    {title}
                </p>
            </Link>

        </div>
    </>);
}

export default BlogListItem;