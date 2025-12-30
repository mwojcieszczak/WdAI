import { useEffect, useState } from "react";

interface TytulProps {

}

const Tytul: React.FC<TytulProps> = () => {
    const [text, settext] = useState("");

    useEffect(() => {
        document.title = text
    }, [text]);

    return (<>
        <input type="text" onInput={e => settext(e.target.value)} />
    </>);
}

export default Tytul;