import Produkt from "./Produkt"

const Produkty: string[] = [
    "jabłko",
    "banan",
    "arbuz",
    "wingorona czerwnone luz czterdzieści procent taniej",
    "też jabłko"
]

const NowyKoszyk = () => {
    return (
        <>
            {Produkty.map(produkt => <Produkt nazwa={produkt} />)}
        </>
    )
}

export default NowyKoszyk