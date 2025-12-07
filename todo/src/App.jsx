import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
// import Home from './components/Home' 

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/todos" element={<Todos />} />
          <Route path="/addtodo" element={<AddTodo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
