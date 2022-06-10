import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbars.css';
import CV from '../../Assets/Shamuel-Resume.pdf'

const Navbars = () => {




    return (
        <div className="">
            {/* Navbar start here  */}

  


            <Navbar expand="sm" className="nav_bar py-2">


                

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto mx-4 my-3 ">

                            <NavLink className="p-2 mx-3 " style={{ textDecoration: 'none' }} to="/home">Home</NavLink>
                            <NavLink className="p-2 mx-3" style={{ textDecoration: 'none' }} to="/about">About</NavLink>
                            <NavLink className="p-2 mx-3" style={{ textDecoration: 'none' }} to="/work">Works </NavLink>
                            <NavLink className="p-2 mx-3" style={{ textDecoration: 'none' }} to="/contact">Contact</NavLink>

                            <a className="p-2  mx-3 " id="downloadBtn" style={{ textDecoration: 'none' }} href={CV} download>Download  </a>

                        </Nav>
                    </Navbar.Collapse>

 

            </Navbar>









        </div>
    );
};

export default Navbars;