import { useState } from "react";

interface LicznikProps {

}

const Licznik: React.FC<LicznikProps> = () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <div>
                <p>
                    {counter}
                </p>
                <button onClick={() => { setCounter(counter + 1) }}>Dodaj</button>
            </div>
        </>
    );
}

export default Licznik;