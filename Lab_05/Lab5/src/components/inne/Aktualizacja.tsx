import { useState } from "react";

interface AktualizacjaProps {

}

const Aktualizacja: React.FC<AktualizacjaProps> = () => {
    const [produkt, setprodukt] = useState({ nazwa: "Pomidor", cena: 50 });
    return (
        <>
            <div>
                <p>
                    Aktualnie {produkt.nazwa} kosztuje {produkt.cena}
                </p>
                <button onClick={() => setprodukt(prev => { return { ...prev, cena: 100 } })}>zmień cene</button>
            </div >
        </>
    );
}

export default Aktualizacja;