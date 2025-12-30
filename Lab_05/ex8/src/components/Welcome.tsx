import { Link } from "react-router-dom";

interface WelcomeProps {

}

const Welcome: React.FC<WelcomeProps> = () => {
    return (<>
        <div>
            <h1>Witamy</h1>
            <Link to="/blog">Artykuły</Link>
        </div>
    </>);
}

export default Welcome;