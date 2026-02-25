import React from "react";

const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div className="mt-6 ml-2">
      <h1> <span className="font-semibold text-4xl">Create</span> <span className=" text-4xl"> Task</span></h1>
      <input
        className="border w-70 mt-5 rounded-sm px-2"
        type="text"
        value={todo}
        placeholder="What needs to be done?"
        onChange={(e) => setTodo(e.target.value)}
      /> <br />

      <button
        className="bg-blue-400 px-3 mt-5 rounded-sm font-semibold hover:bg-blue-500"
        onClick={addTodo}
      >
      Add
      </button>
    </div>
  );
};

export default TodoInput;