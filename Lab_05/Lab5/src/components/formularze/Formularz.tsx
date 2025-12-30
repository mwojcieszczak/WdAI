import { useState } from "react";

interface FormularzProps {

}

const Formularz: React.FC<FormularzProps> = () => {
    const [text, setText] = useState("")
    return (
        <>
            <input type="text" onInput={e => setText(e.target.value)} />
            <div>
                <p>
                    {text}
                </p>
            </div>
        </>
    );
}

export default Formularz;