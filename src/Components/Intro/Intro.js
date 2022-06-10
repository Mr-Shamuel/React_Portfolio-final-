import React from 'react';
import './Intro.css';
import img from '../../img/profile2.png';
import Typewriter from 'typewriter-effect';
import { NavLink } from 'react-router-dom';
 
 
const Intro = () => {
    return (
        <div className="intro mb-3" id="intro">
            <div className="left">
                <div className="imgContainer">
           

                        <img className=""src={img} alt="" />
             


                </div>
            </div>


 

                <div className="right">


                    <div className="wrapper">
                        <h2 className="text-warning">Hello, I'm</h2>
                        <h1>Md. Shamuel</h1>
                        <h3 className="xx"> I'm a&nbsp; <Typewriter
                            options={{
                                strings: [" Web Developer", " Designer", " Content Creator"],

                                autoStart: true,
                                delay: 70,
                                loop: true
                            }}

                        /> </h3>
                        <div className="introBtn">


                            <NavLink to='/about' className="  btn btn-primary my-4 px-3 py-2 mx-2"> About me</NavLink>
                            <a href='#contact' className="font-weight-bold btn btn-outline-success my-4 px-3 py-2 mx-2"> Hire me</a>


                        </div>

                    </div>


                </div>
     
 

        </div>
    );
};

export default Intro;