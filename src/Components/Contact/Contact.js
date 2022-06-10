import React from "react"; 
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import SendIcon from '@mui/icons-material/Send';
import swal from 'sweetalert';
import './Contact.css'
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import MailIcon from '@mui/icons-material/Mail';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Typewriter from 'typewriter-effect';
 
const Contact = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {


        emailjs.sendForm('service_ncbsmnm', 'template_2oprz36', formRef.current, 'tavE0gOJzeZ2Rxr5t')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });



        popUp();
        e.preventDefault();
    }
    const popUp = () => {

        swal({
            title: "Thanks for your message!",
            text: " I'll try my best to get back to you!.",
            icon: "success",
            button: "OK",
        });


    }
    return (
    

        <div className="contact_form" id='contact' >
       
            <div >
           
                    <h3 className="text-center">Get In touch <br /> <span className="text-warning ">Contact</span></h3>
                    <div className="btmline mx-auto"> </div>
                    <div className="btmline mx-auto"> </div>
                 

            </div>
           
           
                
           

            <div class="container contact  h-50 ">
                <div class="row">
                    <div class="col-md-4">

                        <div class="contact-info text-center  ">

                            <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="" />
                            <h2 className="  text-center">Let's Talk  About&nbsp; <span className="mx-auto text-white">
                                <Typewriter
                                    options={{
                                        strings: [" Project", " Your Company", "You"],

                                        autoStart: true,
                                        delay: 70,
                                        loop: true
                                    }}

                                />
                            </span></h2>


                            <h6 class=" text-left pt-2 " ><span class="header_icon"><AddIcCallOutlinedIcon sx={{ fontSize: 25, mr: 1 }}></AddIcCallOutlinedIcon></span> 01303001354 </h6>
                            <h6 class=" text-left pt-2 " ><span class="header_icon"><MailIcon sx={{ fontSize: 25, mr: 1 }}></MailIcon></span> shamuelsam300@gmail.com </h6>
                            <h6 class=" text-left pt-2 " ><span class="header_icon"><FmdGoodIcon sx={{ fontSize: 25, mr: 1 }}></FmdGoodIcon></span>27/10 Tajmahal road, Mohammadpur Dhaka </h6>


                        </div>
                    </div>


                    <div class="col-md-8 border">

                        <div className="text-center mx-5 px-5 mb-3" > <h6 className="xx p-2"> If you have any question or want to say anything, please do not hesitate to send me a message."</h6>
                        </div>
                        <div class="contact-form">

                            <form action="" ref={formRef} onSubmit={handleSubmit}>
                                <div class="form-group">

                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="name" placeholder=" Name" name="user_name" required />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="subject" placeholder="Subject" name="user_subject" required />

                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="email" placeholder="Email" name="user_email" required />

                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="col-sm-10">
                                        <textarea class="form-control" rows="5" id="comment" placeholder="Message.." name="message" required></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                  
                                    <div class="col col-sm-10 ">
                                        <button className="border btn btn-outline-success" type="submit"><SendIcon className="mx-2 m-2" ></SendIcon>  Send</button>
                                      

                                    </div>

                                   
                                 
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>






        </div>
      


    );
};

export default Contact;