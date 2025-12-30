import { useState } from "react";
import Dodawanie from "./Dodawanie";

interface StudentManagerProps {

}

interface Student {
    name: string,
    lastname: string,
    year: number
}

const StudentManager: React.FC<StudentManagerProps> = () => {

    const [students, setStudents] = useState(
        [
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
    );

    const addStudent = (student: Student) => {
        setStudents(prev => [...prev, student])
    }

    return (
        <>
            <table>
                {students.map(student => <tr><td>{student.name}</td><td>{student.lastname}</td><td>{student.year}</td></tr>)}
            </table>
            <Dodawanie add={addStudent} />
        </>
    );
}

export default StudentManager;