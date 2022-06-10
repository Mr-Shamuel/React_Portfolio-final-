import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';
import Typewriter from 'typewriter-effect';

const Footer = () => {
    return (
        <div className="footer bg-dark text-light py-2  px-2">
            <div className="row ">
                <div className="col-md-6 col-sm-12 text-center">
                    <div className="social  ">
                        <h3>Follow me</h3>
                        <a  href="https://www.facebook.com/Mr.Shamuel" className="mx-2" rel="noreferrer" target="_blank" ><FacebookOutlinedIcon className=""></FacebookOutlinedIcon></a>
                        <a href="https://twitter.com/sam71060758" className="mx-2" rel="noreferrer" target="_blank"><TwitterIcon className=" "></TwitterIcon></a>
                        <a href="https://www.instagram.com/shamuel_sam/" className="mx-2" rel="noreferrer" target="_blank"><InstagramIcon className=" "></InstagramIcon></a>
                        <a href="https://github.com/mr-shamuel" className="mx-2" rel="noreferrer" target="_blank"><GitHubIcon className=" "></GitHubIcon></a>
                        <a href="https://www.linkedin.com/in/shamuel-/" className="mx-2" rel="noreferrer" target="_blank"><LinkedInIcon className=""></LinkedInIcon></a>


                    </div>

                </div>
                <div className="col-md-6 col-sm-12 d-flex justify-content-left  align-items-center ">
                    <div className="social "> 

                        <h6 className="xx mb-0"> Designed & Developed by &nbsp; <span className="text-warning"> <Typewriter
                            options={{
                                strings: ["Md. Shamuel Molla"],
 
                                autoStart: true,
                                delay: 70,
                                loop: true
                            }}

                        /> </span> </h6>
                        <h6> ©Copyright {(new Date()).getFullYear()}, All Rights Reserved.   </h6>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer; 