import React, { useState , useEffect } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState("null");
  const [editText, setEditText] = useState("");

  useEffect(()=> {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, [])

  const addToDo = () => {
    if(!newTask.trim()) return;
    setTodos([...todos, {text : newTask, completed: false}]);
    setNewTask("");
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleDone = (index) => {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  }

  const deleteToDo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));

  }

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  }

  const saveEdit = (index) => {
    const updated = [...todos];
    updated[editIndex].text = editText;
    setTodos(updated);
    setEditIndex(null);
    setEditText("");
  }


    

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="bg-white p-6 w-full max-w-md rounded-2xl shadow-md">
        <h1 className="text-2xl text-blue-700 font-semibold text-center">
          My Todo List
        </h1>

        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
          />

          <button
            onClick={addToDo}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-200"
          >
            Add
          </button>
        </div>
        <ul className="space-y-3">
            {todos.length === 0 && (
                <p className="text-center text-gray-500">No tasks yet</p>

            )}
            {todos.map((todo, index) =>(
                <li
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-x shadow-sm hover:shadow-md transition">
                      {editIndex === index ? (<div className="flex w-full gap-2">
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                        />
                        <button
                          onClick={saveEdit}
                          className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-700"
                        >
                          Save 
                        </button>
                      </div>) : (
                        <>
                          <span onClick={() => toggleDone(index)}
                            className={`flex-1 cursor-pointer ${todo.done ? 'line-through text-gray-400' : ''}`}>
                              {todo.text}

                          </span>
                          <div className="flex gap-2">
                            <button
                              onClick={() => startEdit(index)}
                              className="bg-blue-500 text-white px-3 py-1 rounded-xl hover:bg-blue-700">
                              Edit
                            </button>
                            <button
                              onClick={() => deleteToDo(index)}
                              className="bg-red-500 text-white px-3 py-1 rounded-xl hover:bg-blue-700">
                              Delete
                            </button>
                          </div>
                        </>)}
                        
                    </li>
            ))}

        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
