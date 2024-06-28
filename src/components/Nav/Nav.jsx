import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
const Nav = () => {
  return (
  <nav>
    <img className='Logo' src={Logo} alt="" />
      <ul>
          <li><NavLink className='nav__link' to="/">Home</NavLink></li>
          <li><NavLink className='nav__link' to="/AboutMe">About</NavLink></li>
          <li><NavLink className='nav__link' to="/MyService">MyService</NavLink></li>
          <li><NavLink className='nav__link' to="/MyPortfolia">MyPortfolia</NavLink></li>
          <li><NavLink className='nav__link' to="/MyBlog">MyBlog</NavLink></li>
          <li><NavLink className='nav__link' to="/Contact">Contact</NavLink></li>
    </ul>

        <div className='nav__btn'>
         <a className='nav__btns' href="#"> <button className='Btn'>Sign up</button></a>
         <a className='nav__btns' href="#"> <button className='Btn'>Log in</button></a>
        </div>


    
   </nav>
  )
}

export default Nav