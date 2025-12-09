import React, { useState } from 'react';
import { addTodo } from '../service/todo.service';

const AddTodo = ({ onTodoAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await addTodo(title, description);

      console.log("Todo Added:", response);

      setTitle("");
      setDescription("");

      if (onTodoAdded) onTodoAdded();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <form className="m-3 flex flex-col w-1/2" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter todo title"
          className="border border-gray p-2 m-3 w-3/4 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          className="border border-gray p-2 m-3 w-3/4 rounded-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 m-3 rounded-lg hover:bg-blue-700 w-1/4"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
