import { useState } from "react";
import Przycisk from "./Przycisk";

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
                <Przycisk action={() => { setCounter(counter + 1) }} />
            </div>
        </>
    );
}

export default Licznik;