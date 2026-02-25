import React, { useEffect, useState } from 'react'

const Todo = () => {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))


    }, [todos]);

    function addTodo() {
        if (todo.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: todo,
            isCompleted: false,
            isEdit: false
        }
        setTodos(prev => [...prev, newTodo]);
        setTodo("")
    }
    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id != id))
    }

    const toggleTodo = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo

            ));

    }

    const editTodo = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, isEdit: true } : todo
            )
        )

    }
    const clearComplete = () => {
        setTodos(prev => prev.filter(todo => !todo.isCompleted))
    }
    return (

        <>
            <div className=' bg-gray-200 h-screen'>
                <h1 className='bg-gray-400 p-3 font-bold text-2xl '>Your To Do</h1>
                <div className='mt-6 bg-gray-200'>

                    <input
                        className='border-2 rounded-sm px-2 ml-2'
                        type="text"
                        onChange={(e) => setTodo(e.target.value)}
                        placeholder='Enter Todo'
                        value={todo}
                    />
                    <button
                        className='bg-green-500 px-3 cursor-pointer hover:bg-green-600 ml-6 rounded-sm font-semibold '
                        onClick={addTodo}>Add Todo</button>
                    <button
                        className='bg-blue-500 ml-3 cursor-pointer text-white px-3 rounded-sm'
                        onClick={() => clearComplete()}
                    >Clear Completed</button>

                </div>
                <div className='mt-8 mx-2'>
                    <ul>
                        {todos.map((item, index) => (
                            <li className={`py-2 flex justify-between items-center 
                          ${index % 2 === 0 ? 'bg-white' : 'bg-gray-300'}  `}
                                key={item.id}>
                                <span className='ml-6'>{index + 1}.</span>

                                {item.isEdit ? (
                                    <input type="text"
                                        className='border px-2 rounded-sm'
                                        value={item.text}
                                        onChange={(e) =>
                                            setTodos(prev =>
                                                prev.map(todo =>
                                                    todo.id === item.id ? { ...todo, text: e.target.value } : todo
                                                )
                                            )
                                        } />

                                ) : <span className={`ml-3 font-semibold text-lg ${item.isCompleted ? 'line-through' : ""} `}>
                                    {item.text}                  </span>}
                                {item.isEdit && (
                                    <button

                                        className='bg-green-500 hover:bg-green-700 px-3 rounded-sm mr-2 cursor-pointer'
                                        onClick={() => setTodos(prev =>
                                            prev.map(todo => todo.id === item.id ? { ...todo, isEdit: false } : todo)
                                        )}

                                    >


                                        Save
                                    </button>
                                )}

                                <div className='flex gap-4 mx-9 '>

                                    <input type="checkbox"
                                        className='cursor-pointer'
                                        name="" id=""
                                        checked={item.isCompleted}
                                        onChange={() => toggleTodo(item.id)} />




                                    <button
                                        className='bg-blue-500 cursor-pointer  text-white  disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-600 px-3 rounded-sm mr-2'
                                        onClick={() => editTodo(item.id)}
                                        disabled={item.isCompleted}
                                    >Edit</button>

                                    <button className='bg-red-500 cursor-pointer hover:bg-red-800 text-white rounded-sm    px-3'
                                        onClick={() => deleteTodo(item.id)}>x</button>


                                </div>
                            </li>

                        ))}
                    </ul>
                </div>

            </div>

        </>

    )
}

export default Todo