import React from "react";

export default function StatusSelect({ setStatus }) {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <select
      onChange={statusHandler}
      className="select select-primary  max-w-xs"
    >
      <option value="all" selected>
        All
      </option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Not Completed</option>
    </select>
  );
}
