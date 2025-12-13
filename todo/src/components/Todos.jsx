import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import { deleteTodo, editTodo, getAllTodos } from '../service/todo.service';

const Todos = () => {
  const [todoArray, setTodoArray] = useState([]);
  const [newTitle, setnewTitle] = useState("");
  const [newDesc, setnewDesc] = useState("");
  const [editId, setEditId] = useState("");

  const fetchAllTodos = async () => {
    try {
      const arr = await getAllTodos();
      console.log(arr);

      setTodoArray(arr)
    } catch (error) {
      console.log(error);

    }
  }
  const deleteTodoAPICall = async (id) => {
    try {
      const message = await deleteTodo(id);
      fetchAllTodos();
      alert(message);
    } catch (error) {
      console.log(error);

    }
  }

  const editSomething = (todo) => {
    setEditId(todo._id);
    setnewTitle(todo.title);
    setnewDesc(todo.description);

  }

  const cancelEditing = () => {
    setEditId("");
    setnewTitle("");
    setnewDesc("");

  }

  const callEditAPI = async () => {
    try {
      const message = await editTodo(editId, newTitle, newDesc);
      alert(message);
      fetchAllTodos();
      cancelEditing();
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchAllTodos();
  }, []);

  const handleTodosAdded = () => {
    fetchAllTodos();
  };

  return (
    <div className="overflow-x-auto">
      <AddTodo onTodoAdded={handleTodosAdded} />
      <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">

        <thead className="bg-purple-800 text-white">
          <tr>
            <th className="border border-indigo-500 px-4 py-2 text-left">S.No</th>
            <th className="border border-indigo-500 px-4 py-2 text-left">Title</th>
            <th className="border border-indigo-500 px-4 py-2 text-left">Description</th>
            <th className="border border-indigo-500 px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {todoArray.length > 0 && todoArray.map((todo, index) => (
            <tr key={todo._id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">
                {editId === todo._id ? <input type='text' className="border border-gray  p-2 m-3 w-3/4 rounded-lg"
                  value={newTitle} onChange={(e) => setnewTitle(e.target.value)}
                /> : todo.title}
              </td>
              <td className="border px-4 py-2">
                {editId === todo._id ? <textarea name="" id="" placeholder="Description..." className="border border-gray p-2 m-3 w-3/4 rounded-lg "
                  value={newDesc} onChange={(e) => setnewDesc(e.target.value)}
                ></textarea> : todo.description}</td>
              <td className="border px-4 py-2 text-center space-x-3">
                {editId === todo._id ? <>
                  <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    onClick={callEditAPI}
                  >OK</button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={cancelEditing}
                  >Cancel</button>
                </> : <>
                  <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    onClick={() => editSomething(todo)}
                  >Edit</button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={() => deleteTodoAPICall(todo._id)}
                  >Delete</button>
                </>}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Todos;

