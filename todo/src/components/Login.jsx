import React, { useState } from 'react'
import Header from './Header';
import { signin } from '../service/todo.service';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [user, setUser] =useState({});
  
  const navigate = useNavigate();

  const submitHandle = async (e)=>{
    e.preventDefault();
    const response = await signin(user.email, user.password);
    localStorage.setItem("authtoken", response.authtoken);
    alert(response.message);
    navigate("/todos");
  }
  return( 
  <>
<Header />
      <form className="m-3 flex flex-col items-center w-full" onSubmit={(e)=> submitHandle(e)}>

    <label className="font-bold m-3">Enter Email:</label>
    <input type="email" className="border border-gray  p-2 m-3 w-3/4 rounded-lg" placeholder="abc@gmail.com"

    value={user.email} onChange={(e)=> setUser({...user, email: e.target.value })} />

    <label className="font-bold m-3">Enter Password:</label>
    <input type="password" className="border border-gray  p-2 m-3 w-3/4 rounded-lg" name="password" placeholder="##%QHJCSJC@"

    value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})}
    />

        <button className="bg-rose-500 text-white p-2 m-3 rounded-lg hover:bg-rose-800 w-1/4 items-center" type="submit" >Login</button>

  </form>
  </>
  )
}

export default Login



