interface TernaryProps {

}

const Ternary: React.FC<TernaryProps> = () => {
    const a = true
    const b = false
    return (
        <>
            <div>
                <p>
                    {a ? "Stwierdzenie a jest prawdziwe" : "Stwierdzenie a jest fałszywe"}
                </p>
            </div>
            <div>
                <p>
                    {b ? "Stwierdzenie b jest prawdziwe" : "Stwierdzenie b jest fałszywe"}
                </p>
            </div>
        </>
    );
}

export default Ternary;