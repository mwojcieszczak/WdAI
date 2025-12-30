import { useEffect, useState } from "react";

interface OdliczanieProps {

}

const Odliczanie: React.FC<OdliczanieProps> = () => {
    const [time, setTime] = useState(15);
    const [intervalId, setIntervalId] = useState(0);
    const [text, setText] = useState("START");
    const [disabled, setDisabled] = useState(false);

    const startTimer = () => {
        const id = setInterval(() => {
            setTime(prev => Math.round((prev - 0.1) * 10) / 10)
        }, 100)
        setIntervalId(id)
    }

    useEffect(() => {
        if (time <= 0) {
            clearInterval(intervalId)
            setDisabled(true)
            setText("ODLICZANIE ZAKOŃCZONE")
        }
    }, [time]);

    const stopTimer = () => {
        clearInterval(intervalId)
        setIntervalId(0)
    }

    const onClick = () => {
        if (text == "START") {
            startTimer()
            setText("STOP")
        } else {
            stopTimer()
            setText("START")
        }
    }

    return (<>
        <div>
            <p>
                {time}
            </p>
            <button onClick={onClick} disabled={disabled}>{text}</button>
        </div>
    </>);
}

export default Odliczanie;