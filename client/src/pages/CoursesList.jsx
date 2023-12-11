import React, { useState } from "react";
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
  const columns = ["Name", "Teacher", "Class"];

  const handleAdd = () => {
    console.log("Add button clicked");
    };

  const handleEdit = (row) => {
    console.log("Edit button clicked for row with id:", row.id);
  };

  const handleDelete = (row) => {
    console.log("Delete button clicked for row with id:", row.id);
  };

  return (
    <div>
      <h1>Courses</h1>

      <Table
        columns={columns}
        data={courses}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        actions={[
          {
            type: "edit",
            handler: handleEdit,
          },
          {
            type: "delete",
            handler: handleDelete,
          },
        ]}
      />
    </div>
  );
}
