import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
  updateTodoText,
}) => {
  return (
    <ul className="mt-8 mx-2">
      {todos.map((item, index) => (
        <TodoItem
          key={item.id}
          item={item}
          index={index}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          updateTodoText={updateTodoText}
        />
      ))}
    </ul>
  );
};

export default TodoList;