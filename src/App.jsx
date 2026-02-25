
import React, { useEffect, useState } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (todo.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: todo,
      isCompleted: false,
      isEdit: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
      )
    );
  };

  const updateTodoText = (id, text) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted));
  };

  return (








    <div className="bg-gray-200   flex justify-center  min-h-screen">


      <div className='w-full mt-10 px-3 max-w-3xl '>
        <h1 className="bg-gray-400 p-3 font-semibold text-center text-4xl">Todos</h1>

        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          updateTodoText={updateTodoText}
        />

        {todos.some((t) => t.isCompleted) && (
          <div className="mt-4 ">
            <button
              onClick={clearCompleted}
              className="bg-blue-500 text-white px-4 py-1 rounded"
            >
              Clear Completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;