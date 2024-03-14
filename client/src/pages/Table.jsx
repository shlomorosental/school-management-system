import React from "react";
import "./table.css";
import Row from "./Row";
import Button from "./Button";

export default function Table({ columns, data, onAdd, onEdit, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
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
              <input type="text" placeholder={`Enter ${column}`} />
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
