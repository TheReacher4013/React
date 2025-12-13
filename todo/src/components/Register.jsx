import React,{useState} from 'react'
import { signup } from '../service/todo.service';
import Header from './Header';

const Register = () => {
  const [user, setUser] =  useState({});
  const SubmitHandle = async (e)=>{
    e.preventDefault();
    // debugger;
    // console.log(user);

    const message =  await signup(user.name, user.email, user.password);
    alert(message);
  }
  return ( 
    <>
    <Header />
    <form className="m-3 flex flex-col items-center w-full" onSubmit={(e)=> SubmitHandle(e)}>

      <label className="font-bold m-3">Name:</label>
      <input type="text" className="border border-gray  p-2 m-3 w-3/4 rounded-lg" placeholder="Rushikesh Joshi"
      
      value={user.name} onChange={(e)=> setUser({...user, name: e.target.value})}
      />

      <label className="font-bold m-3">Enter Email:</label>
      <input type="email" className="border border-gray  p-2 m-3 w-3/4 rounded-lg" placeholder="abc@gmail.com" 
      
      value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})}/>

      <label className="font-bold m-3">Enter Password:</label>
      <input type="password" className="border border-gray  p-2 m-3 w-3/4 rounded-lg" name="password" placeholder="##%QHJCSJC@" 
      value={user.password} onChange={(e)=> setUser({...user, password: e.target.value})}
      />

      <button className="bg-rose-500 text-white p-2 m-3 rounded-lg hover:bg-rose-800 w-1/4 items-center pointer-coarse:cursor-pointer" type='submit'>Register</button>

    </form>
    </>
  )
}

export default Register


