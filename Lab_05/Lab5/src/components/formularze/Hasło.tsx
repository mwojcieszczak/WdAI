import { useState } from "react";

interface HasłoProps {

}

const Hasło: React.FC<HasłoProps> = () => {
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [text, setText] = useState("");

    const inputChange = (pass1: string, pass2: string) => {
        if (pass1 == "" && pass2 == "") {
            setText("Proszę wprowadzić hasło")
        }
        else if (pass1 == pass2) {
            setText("")
        }
        else {
            setText("Hasła nie są zgodne")
        }

        setPass1(pass1)
        setPass2(pass2)
    }


    return (<>
        <input type="text" onInput={e => { inputChange(e.target.value, pass2) }} />
        <br />
        <input type="text" onInput={e => { inputChange(pass1, e.target.value) }} />
        <div>
            <p>{text}</p>
        </div>
    </>);
}

export default Hasło;