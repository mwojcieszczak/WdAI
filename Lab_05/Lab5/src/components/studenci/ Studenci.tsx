interface StudenciProps {

}

interface Student {
    name: string,
    lastname: string,
    year: number
}

const Studenci: React.FC<StudenciProps> = () => {
    const Students: Student[] = [
        {
            name: "jan",
            lastname: "kowalski",
            year: 1984
        },
        {
            name: "janina",
            lastname: "kowalska",
            year: 1984
        }
    ]
    return (
        <>
            <table>
                {Students.map(student => <tr><td>{student.name}</td><td>{student.lastname}</td><td>{student.year}</td></tr>)}
            </table>
        </>
    );
}

export default Studenci;