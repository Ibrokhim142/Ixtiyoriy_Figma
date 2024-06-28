import { DiJava } from "react-icons/di"; 
import { DiDojo } from "react-icons/di"; 
import { DiAndroid } from "react-icons/di"; 
import { FaGithubSquare } from "react-icons/fa"; 
import { DiGitBranch } from "react-icons/di"; 
import { DiCss3 } from "react-icons/di"; 
import { DiBrackets } from "react-icons/di"; 
import React from 'react'
import './Myservice.css'
import komp from '../../assets/img/komp.webp'
const MyService = () => {
  return (


    <div className='MyService'>
      <div>  <h3 className='MyService__tittle_text'>MyServices</h3></div>
        <dir className='MyService__card'>
             <div className="MyService__cards">
                <div className="MyService__card_tittle">
                    <div>
                      <h3>Brackets</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae eos quidem tenetur cum asperiores rerum facere beatae quaerat.</p>
                    </div>
                    <div className="MyService__card_icon">
                    <DiBrackets />
                    </div>
                  </div>

                  <div className="MyService__card_tittle">
                    <div>
                      <h3>CSS</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae eos quidem tenetur cum asperiores rerum facere beatae quaerat.</p>
                    </div>
                    <div className="MyService__card_icon">
                    <DiCss3 />
                    </div>
                  </div>
                  <div className="MyService__card_tittle">
                    <div>
                      <h3>Branch</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae eos quidem tenetur cum asperiores rerum facere beatae quaerat.</p>
                    </div>
                    <div className="MyService__card_icon">
                    <DiGitBranch />
                    </div>
                  </div>
         </div>
            <img src={komp} alt="" />

            <div className="MyService__cards">
                <div className="MyService__card_tittles">
                <div className="MyService__card_icon">
                    <FaGithubSquare />
                    </div>
                    <div>
                      
                      <h3>GitHub</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae eos quidem tenetur cum asperiores rerum facere beatae quaerat.</p>
                    </div>
                   
                  </div>

                  <div className="MyService__card_tittles">
                  <div className="MyService__card_icon">
                    <DiDojo />
                    </div>
                    <div>
                      <h3>DOJO</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae eos quidem tenetur cum asperiores rerum facere beatae quaerat.</p>
                    </div>
                   
                  </div>
                  <div className="MyService__card_tittles">
                  <div className="MyService__card_icon">
                   <DiJava />
                    </div>
                    <div>
                      <h3>JAVA</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae eos quidem tenetur cum asperiores rerum facere beatae quaerat.</p>
                    </div>
                   
                  </div>
         </div>


        </dir>


    </div>
  )
}

export default MyService