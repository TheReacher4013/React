import React from 'react'

const AddTodo = () => {
  return (
    <>
    <div>
      <form className="m-3 flex flex-col  w-1/2">
        <label>Title:</label>
        <input type="text" placeholder="Enter todo title" className="border border-gray p-2 m-3 w-3/4 rounded-lg"/> 
        
        <label>Description:</label>
        <textarea name="" id=""></textarea> 
        
        <button type="submit" className="bg-blue-500 text-white p-2 m-3 rounded-lg hover:bg-blue-700 w-1/4 items-center">Add Todo</button>
      </form>
    </div>
    </>
  )
}

export default AddTodo