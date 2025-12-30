interface PrzyciskProps {
    action(): any
}

const Przycisk: React.FC<PrzyciskProps> = ({ action }) => {
    return (
        <>
            <button onClick={action}>Dodaj</button>
        </>
    );
}

export default Przycisk;