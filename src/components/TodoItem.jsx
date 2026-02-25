import React from "react";

const TodoItem = ({
  item,
  index,
  toggleTodo,
  deleteTodo,
  editTodo,
  updateTodoText,
}) => {
  return (
    <li

     
      className={`py-2 flex  rounded-l-lg border-l-6 border-l-sky-600 mt-2 justify-between items-center
      ${index % 2 === 0 ? "bg-white" : "bg-gray-300"}`}
    >
      <span className="ml-4">{index + 1}.</span>

      {item.isEdit ? (
        <input
          className="border px-2 rounded"
          value={item.text}
          onChange={(e) => updateTodoText(item.id, e.target.value)}
        />
      ) : (
        <span
         onClick={() => toggleTodo(item.id)}
          className={`ml-3 font-semibold ${item.isCompleted ? "line-through" : ""
            }`}
        >
          {item.text}
        </span>
      )}

      <div className="flex gap-3 mr-4">
        <input
          type="checkbox"
          checked={item.isCompleted}
          onChange={() => toggleTodo(item.id)}
        />

        <button
          onClick={() => editTodo(item.id)}
          disabled={item.isCompleted}
          className="bg-blue-500 text-white px-3 rounded disabled:bg-gray-400"
        >
          {item.isEdit ? "Save" : "Edit"}
        </button>

        <button
          onClick={() => deleteTodo(item.id)}
          className="bg-red-500 text-white px-3 rounded"
        >
          x
        </button>
      </div>
    </li>
  );
};

export default TodoItem;