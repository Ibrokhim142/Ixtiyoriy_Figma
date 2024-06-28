import './App.css'
import React from 'react'
import MyService from './routes/MyService/MyService.jsx'
import MyPortfolia from './routes/MyPortfolia/MyPortfolia.jsx'
import MyBlog from './routes/MyBlog/MyBlog.jsx'
import About from './routes/AboutMe/About.jsx'
import Contact from './routes/Contact/Contact.jsx'
import Home from './routes/home/Home.jsx'
import {  Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav.jsx'
function App () {

  return (
    <>
      <Nav/>
      <Routes>
         <Route path ='/' element={<Home/>}/>
         <Route path ='/AboutMe' element={ <About/>}/>
         <Route path ='/MyService' element={ <MyService/>}/>
         <Route path ='/MyPortfolia' element={ <MyPortfolia/>}/>         
         <Route path ='/MyBlog' element={ <MyBlog/>}/>
         <Route path ='/Contact' element={ <Contact/>}/>
      </Routes>
    </>
  )
}

export default App
