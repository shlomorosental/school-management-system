import React, { useEffect, useState } from "react";
import Table from "./Table";

const dummyData = [
  {
    id: 1,
    name: "Math",
    teacher: "John Doe",
    class: 12,
  },
  {
    id: 2,
    name: "English",
    teacher: "Jane Smith",
    class: 10,
  },
  {
    id: 3,
    name: "Biology",
    teacher: "Jack Ryan",
    class: 11,
  },
];

export default function CoursesList() {
  const [courses, setCourses] = useState(dummyData);
  const [teacher, setTeacher] = useState([]);
  const columns = ["name", "teacher", "class"];

  const handleAdd = async (name, nameTeacher, clas) => {
    if (!name || !nameTeacher || !clas) {
      alert("All or some of the fields are empty");
      return;
    }
    try {
      await fetch(`http://localhost:5000/api/courses/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          teacher: nameTeacher,
          class: clas,
        }),
      });
      renderPage();
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const handleEdit = (row) => {
    console.log("Edit button clicked for row with id:", row.id);
  };

  const handleDelete = (row) => {
    fetch(`http://localhost:5000/api/courses/${row.id}`, { method: "delete" })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        renderPage();
      });
  };
  useEffect(() => {
    renderPage();
  }, []);

  const renderPage = () => {
    fetch("http://localhost:5000/api/courses/")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.log(error));

    fetch("http://localhost:5000/api/teacher/")
      .then((response) => response.json())
      .then((data) => setTeacher(data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Courses</h1>

      <Table
        nameTable="courses"
        columns={columns}
        data={courses}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        teacherList={teacher}
      />
    </div>
  );
}
