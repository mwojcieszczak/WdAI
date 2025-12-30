import { useState } from "react";

interface DodawanieProps {
    add(student: Student): any
}

interface Student {
    name: string,
    lastname: string,
    year: number
}

const Dodawanie: React.FC<DodawanieProps> = ({ add }) => {
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [year, setyear] = useState(0);

    const onButtonClick = () => {
        if (name == "" || lastname == "" || year <= 0) {
            alert("wpisz!")
        } else {
            add({
                name: name,
                lastname: lastname,
                year: year
            })
        }
    }

    return (
        <>
            <form action={onButtonClick}>
                <input type="text" name="" id="" onInput={e => setname(e.target.value)} />
                <input type="text" name="" id="" onInput={e => setlastname(e.target.value)} />
                <input type="number" name="" id="" onInput={e => setyear(e.target.value)} />
                <button >dodaj</button>
            </form>
        </>
    );
}

export default Dodawanie;