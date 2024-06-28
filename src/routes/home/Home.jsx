import { SiVercel } from "react-icons/si"; 
import React from 'react'
import './Home.css'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import Man from '../../assets/img/man.jpg'
const Home = () => {


  return (
    <div className="home">
          

        <div className='home__tittle'>
              <h3>Ibrokhim Studios</h3>
                <h5>Hello, i’m</h5>
              <h2>Mr. Ibrokhim</h2>
              <p>FULL-STACK DEVELOPER | UX/UI DESIGNER | FRONTED</p>
              <div class="home__icons">
                <a href="https://www.instagram.com/ibrohim_19_91/?next=%2F"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/ibrokhim-melikuziev-0b9b3a2b0/"> <FaLinkedinIn /></a>
                <a href="https://t.me/IBROKHIM1991"> <FaTelegram /></a>
                <a href="https://github.com/Ibrokhim142"> <FaSquareGithub /></a>
                <a href="https://vercel.com/ibrokhim142s-projects"><SiVercel /></a>
                  
              </div>
        </div>
        <div>
          <img className='home__img' src={Man} alt="" />
        </div>




    </div>
  )
}

export default Home