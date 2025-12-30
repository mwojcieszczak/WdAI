import { useState } from "react";

interface LogowanieProps {

}

const Logowanie: React.FC<LogowanieProps> = () => {
    const [name, setName] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [disabled, setDisabled] = useState(true);

    const inputChange = (name: string, pass1: string, pass2: string) => {
        if (pass1 == "" || pass2 == "" || name == "") {
            setDisabled(true)
        }
        else {
            setDisabled(false)
        }
        setName(name)
        setPass1(pass1)
        setPass2(pass2)
    }

    const buttonClicked = () => {
        if (pass1 == pass2) {
            alert("Zalogowano poprawnie")
        } else {
            alert("Hasła nie są zgodne")
        }
    }


    return (<>
        <input type="text" onInput={e => { inputChange(e.target.value, pass1, pass2) }} />
        <br />
        <input type="text" onInput={e => { inputChange(name, e.target.value, pass2) }} />
        <br />
        <input type="text" onInput={e => { inputChange(name, pass1, e.target.value) }} />
        <br />
        <button disabled={disabled} onClick={buttonClicked}>Logowanie</button>
    </>);
}

export default Logowanie;