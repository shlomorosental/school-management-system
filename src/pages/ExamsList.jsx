import { useState } from "react";
import "./table.css";

const dummyData = [
  {
    id: 1,
    courseName: "Math",
    class: 12,
    courseId: 123,
    examDate: "2023-04-22",
  },
  {
    id: 2,
    courseName: "English",
    class: 10,
    courseId: 456,
    examDate: "2023-08-09",
  },
  {
    id: 3,
    courseName: "Biology",
    class: 11,
    courseId: 789,
    examDate: "2023-01-15",
  },
];

export default function ExamsList() {
  const [exams, setExams] = useState(dummyData);

  return (
    <div>
      <h1>Exams</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Date</th>
            <th>Class</th>
          </tr>
        </thead>

        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id}>
              <td>{exam.courseName}</td>
              <td>{exam.examDate}</td>
              <td>{exam.class}</td>

              <td>
                <button>Edit </button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button>Add Exam</button>
    </div>
  );
}
