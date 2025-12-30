import { useState } from "react";

interface KomentarzProps {
    id: number,
    body: string,
    postId: number,
    likes: number,
    user: User,
}

interface User {
    id: number,
    username: string,
    fullName: string,
}

const Komentarz: React.FC<KomentarzProps> = ({ id, body, postId, likes, user }) => {
    const [likesCount, setlikesCount] = useState(likes);
    return (
        <>
            <div style={{ borderColor: 'black', borderWidth: 5, borderStyle: 'solid', margin: 10, padding: 10 }}>
                <p>{user.fullName} ( {user.username} )</p>
                <p>{body}</p>
                <button onClick={() => setlikesCount(prev => prev + 1)}>UP</button>{likesCount} <button onClick={() => setlikesCount(prev => prev - 1)}>DOWN</button>
            </div>
        </>
    );
}

export default Komentarz;