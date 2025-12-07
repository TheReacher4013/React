import React, { useState } from 'react';
import AddTodo from './AddTodo';

const Todos = () => {
  const [todoArray, setTodoArray] = useState([
    { _id: "40132", title: "First Todo", description: "This is my first todo" },
    { _id: "40133", title: "Second Todo", description: "This is my second todo" }
  ]);

  return (
      <div className="overflow-x-auto">
      <AddTodo />
        <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">

          <thead className="bg-indigo-600 text-white">
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
                <td className="border px-4 py-2">{todo.title}</td>
                <td className="border px-4 py-2">{todo.description}</td>

                <td className="border px-4 py-2 text-center space-x-3">
                  <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                    Edit
                  </button>

                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
  );
};

export default Todos;
