import React, { useState } from "react";
import "./table.css";
import Row from "./Row";
import Button from "./Button";
// import { Select } from "@mui/material";
import SelectComponent from "./SelectComponent";

export default function Table({
  nameTable,
  columns,
  data,
  onAdd,
  onEdit,
  onDelete,
  teacherList,
}) {
  const [ name, setName] = useState("");
  const [ nameTeacher, setNameTeacher] = useState("");
  const [clas, setClass] = useState("");

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <Row
            key={row.id}
            columns={columns}
            rowData={row}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          {columns.map((column) => (
            <td key={column}>
              {nameTable === "courses" && column === "name" ? (
                <input type="text" placeholder={`Enter ${column}`}onChange={(e) => setName(e.target.value)} value={name} />
              ) : column === "teacher" ? (
                <SelectComponent
                setv= {setNameTeacher}
                  options={teacherList.map(
                    (item) => item.first_name + " " + item.last_name
                  )}
                />
              ) : (
                <SelectComponent setv= {setClass} options={[1, 2, 3, 4, 5, 6, 7]} />
              )}
            </td>
          ))}

          <td>
            <Button type="button" text="Add" action="add" onClick={()=>onAdd(name, nameTeacher, clas)} />
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
