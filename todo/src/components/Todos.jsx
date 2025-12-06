import React, { useState } from 'react'

const Todos = () => {
  const [todoArray, setTodoArray] = useState([{_id: "40132", title: "First Todo", description: "This is my first todo"}, {_id: "40133", title: "Second Todo", description: "This is my second todo"}]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">S.No</th>
            <th className="border border-gray-400 px-4 py-2">Title</th>
            <th className="border border-gray-400 px-4 py-2">Description</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          todoArray.length > 0 && todoArray.map((todo, index) => (
            <tr key={todo._id}>
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">{todo.title}</td>
              <td className="border border-gray-400 px-4 py-2">{todo.description}</td>
              <td className="border border-gray-400 px-4 py-2">
                <button>Edit</button>
                <button>Actions</button>
              </td>
            </tr>
          ))
        }

        </tbody>

      </table>

    </div>
  )
}

export default Todos