import { useState } from "react";

function Columns({ columns, changeColName }) {
  const [openedInput, changeOpenedInput] = useState(null);

  return (
    <div className="columns">
      {columns.map((column, idx) => {
        return (
          <div key={idx} className="task-list">
            <input
              className="column"
              value={column}
              onChange={(e) => changeColName(idx, columns)}
            />

            <button
              onClick={() => changeOpenedInput(idx)}
              className="add-new-task"
            >
              + Add new task
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Columns;
