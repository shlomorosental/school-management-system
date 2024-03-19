import React from "react";
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
                <input type="text" placeholder={`Enter ${column}`} />
              ) : column === "teacher" ? (
                <SelectComponent
                  options={teacherList.map(
                    (item) => item.first_name + " " + item.last_name
                  )}
                />
              ) : <SelectComponent options={[1, 2, 3, 4, 5, 6, 7]} />}
            </td>
          ))}

          <td>
            <Button type="button" text="Add" action="add" onClick={onAdd} />
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
