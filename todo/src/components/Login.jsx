import React from 'react'

const Login = () => {
  return <>
      <form className="m-3 flex flex-col items-center w-full">
    <label className="font-bold m-3">Enter Email:</label>
    <input type="text" className="border border-gray  p-2 m-3 w-3/4 rounded-lg" placeholder="abc@gmail.com" />
    <label className="font-bold m-3">Enter Password:</label>
    <input type="password" className="border border-gray  p-2 m-3 w-3/4 rounded-lg" name="password" placeholder="##%QHJCSJC@"/>
    <button type="submit" className="bg-rose-500 text-white p-2 m-3 rounded-lg hover:bg-rose-800 w-1/4 items-center">Login</button>
  </form>
  </>
}

export default Login


// import React, { useState } from 'react'

// const Login = () => {

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log("Email:", email)
//         console.log("Password:", password)
//         alert("Login successful (dummy)")
//     }

//     return (
//         <>
//             <form
//                 onSubmit={handleSubmit}
//                 style={{
//                     maxWidth: "350px",
//                     margin: "50px auto",
//                     padding: "20px",
//                     border: "1px solid #ccc",
//                     borderRadius: "10px"
//                 }}
//             >
//                 <label>Enter Email:</label><br />
//                 <input
//                     type="email"
//                     className="border p-2 w-full mb-3"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 /><br />

//                 <label>Enter Password:</label><br />
//                 <input
//                     type="password"
//                     className="border p-2 w-full mb-3"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 /><br />

//                 <button
//                     type="submit"
//                     style={{
//                         padding: "10px 20px",
//                         background: "blue",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         cursor: "pointer",
//                         marginTop: "10px"
//                     }}
//                 >
//                     Login
//                 </button>
//             </form>
//         </>
//     )
// }

// export default Login
