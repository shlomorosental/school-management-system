import React from "react";
import Button from "./Button";

export default function Row({ columns, rowData, onEdit, onDelete }) {
  return (
    <tr>
      {columns.map((column) => (
        <td key={column}>{rowData[column]}</td>
      ))}
      <td>
        <Button type="button" text="Edit" action="edit" onClick={() => onEdit(rowData)} />
        <Button type="button" text="Delete" action="delete" onClick={() => onDelete(rowData)} />
      </td>
    </tr>
  );
}
