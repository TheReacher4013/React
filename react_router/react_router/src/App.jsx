import React from 'react'
import Header from './components/Header'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ContactUs from './components/ContactUs'
import Services from './components/Services'
import ClassComponents from './components/ClassComponents'
import FunctionalComponents from './components/FunctionalComponents'

const App = () => {
  const [visible, setVisible] = React.useState(true)
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Routes>
          <Route path="/" element={<h1>this is home page</h1>} />
          <Route path="/about-us" element= {<h1>this is about page</h1>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>  
          <Route path='/services' element={<Services/>} >
           <Route path='/services/service1' element={<h2>this is nested routing</h2>} />
            <Route path='/services/service2' element={<h2>this is routing</h2>} />
          </Route> 
        </Routes> */}
        {/* {visible && <ClassComponents />} */} 
         {visible && <FunctionalComponents state= {visible}/>}
        <button onClick={() => setVisible(false)}>Set unmounting</button> 
       
      </main>
    </div>
  )
}

export default App