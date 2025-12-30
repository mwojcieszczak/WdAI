import { useEffect, useState } from "react";
import Komentarz from "./Komentarz";

interface KomentarzeProps {

}

const Komentarze: React.FC<KomentarzeProps> = () => {
    const [data, setdata] = useState({});
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/comments").then(res => res.json()).then(res => setdata(res))
    }, []);

    useEffect(() => {
        if (Object.keys(data).length != 0) {
            setComments(data.comments.map(comment => <Komentarz id={comment.id} body={comment.body} postId={comment.postId} likes={comment.likes} user={comment.user} />))
        }
    }, [data])

    return (<>
        {comments}
    </>);
}

export default Komentarze;