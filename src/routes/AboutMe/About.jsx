import React from 'react'
import './About.css'
import  car from '../../assets/img/car.jpg'
import tkd from   '../../assets/img/1.jpg'
import tks from   '../../assets/img/2.jpg'
import tkt from   '../../assets/img/3.jpg'
import tkr from   '../../assets/img/4.jpg'
import tke from   '../../assets/img/5.jpg'
import tkw from   '../../assets/img/6.jpg'

const About = () => {
  return (
    <section>
        <div className='about'>
            <div className='about__img'>
              <img className='about__imgages' src={car} alt="" />
            </div>

            <div className='about__tittle'>
                <h3>
                About me
                </h3>

                <p>I'm Ibrokhim Melikuziev, I'm 33 years old, I currently work independently as a fullstack, UX|UI designer and video game designer.

                  I currently have a video game studio where 
                  I spend my time mixing ideas from all my work to 
                  generate quality stories that everyone can enjoy.</p>

                 



            </div>
            
        </div>

            

                    <h3>
                      I Like TaekwionDoITF
                    </h3>
        <div className='about__images_img'>

                    
                  <img src={tkd} alt="" />
                  <img src={tks} alt="" />
                  <img src={tkt} alt="" />
                  <img src={tkr} alt="" />
                  <img src={tke} alt="" />
                  <img src={tkw} alt="" />
                  </div>

    </section>
  )
}

export default About