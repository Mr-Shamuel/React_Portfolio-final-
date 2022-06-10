import React from 'react';
import aboutme from '../../img/aboutme.jpg';
import { FaAward } from 'react-icons/fa';
import { TiFolderOpen } from 'react-icons/ti';
import { MdDownloadForOffline } from 'react-icons/md';
import './About.css';
import CV from '../../Assets/Shamuel-Resume.pdf'



const About = () => {
    return (
        <section id="about" className=" pt-2 ">


            <div className="text-center" data-aos="fade-down">
                <h3 className="text-center">Get to know <br /> <span className="text-warning ">About Me</span></h3>
                <div className="btmline mx-auto"> </div>
                <div className="btmline mx-auto  "> </div>

                <section class="sectionnGap"></section>
            </div>



            <div className="container about_container  mx-auto" >

                <div className="about_content" data-aos="zoom-out-right" data-aos-duration="1500">

                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon" />
                            <h5>Experince</h5>
                            <small>2+ Years Experince</small>
                        </article>
                        <article className="about_card">
                            <TiFolderOpen className="about_icon" />
                            <h5>Projects</h5>
                            <small>17+ Complete Projects</small>
                        </article>
                    </div>



                    <p className="pt-3 text-muted">Dreaming to be a Software Engineer and Developer. I’m seeking
                        to obtain a creative and challenging position that utilizes current
                        knowledge of problem solving and web development. Having a
                        positive outlook and am always willing to learn new traits. I work
                        well both independently and as part of a team</p>




                    <div className="down" data-aos="zoom-in" data-aos-duration="1500">
                        <a className="p-2  mx-3 " id="downloadBtn" style={{ textDecoration: 'none' }} href={CV} download><MdDownloadForOffline className="mx-2 text-white"></MdDownloadForOffline>Download Resume </a>
                    </div>

                </div>





                <div className="about_me" data-aos="zoom-out-left" data-aos-duration="1500">
                    <div className="about_me-img  ">
                        <img className="img-fluid" src={aboutme} alt="" />

                    </div>
                </div>

            </div>
            <section class="sectionnGap"></section>

        </section>
    );
};

export default About;