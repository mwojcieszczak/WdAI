import { useEffect, useState } from "react";

interface LicznikProps {

}

const Licznik: React.FC<LicznikProps> = () => {
    useEffect(() => {
        console.log("Hello world");

    }, []);
    const [counter, setCounter] = useState(0)
    return (
        <>
            <div>
                <p>
                    {counter}
                </p>
                <button onClick={() => {
                    setCounter(counter + 1); console.log(`licznik zwiększył się do ${counter}`);
                }
                }
                >Dodaj</button>
            </div>
        </>
    );
}

export default Licznik;