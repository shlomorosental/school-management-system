import React from "react";

export default function Button({ type, text, action, onClick }) {
  return (
    <button type={type} onClick={() => onClick(action)}>
      {text}
    </button>
  );
}