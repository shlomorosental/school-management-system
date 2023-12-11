import React from "react";
import "./table.css";

export default function Table({ columns, data, actions, onAdd, onEdit, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column}>{row[column.toLowerCase()]}</td>
            ))}
            <td>
              {actions.map((action, index) => (
                <button key={index} onClick={() => action.handler(row)}>
                  {action.type}
                </button>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
      {onAdd && <button onClick={onAdd}>Add</button>}
    </table>
  );
}