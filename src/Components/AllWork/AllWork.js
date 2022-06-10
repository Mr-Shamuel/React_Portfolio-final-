import React from 'react';

import img1 from '../../img/online tutor.PNG';
import img2 from '../../img/emajohn.PNG';
import img3 from '../../img/cooking.PNG';
import img4 from '../../img/ship.PNG';
// import img5 from '../../img/emajohn.PNG';
import img6 from '../../img/rider app.PNG';
import img7 from '../../img/cricket.PNG';
import img8 from '../../img/bank.PNG';
import img9 from '../../img/pinguin.PNG';
import img10 from '../../img/slider.PNG';
import img11 from '../../img/phone.PNG';
import img12 from '../../img/psd.PNG';
import img13 from '../../img/monico.PNG';





import WorkData from './WorkData';
 

const worksData = [
    {
        name: "Online Tutor Finder",
        description: "An Online Tutor Finder is a website where User (students, parents) can easily find their desire tutor. ",
        github: "https://github.com/Mr-Shamuel/Online-tutor-2022",
        live: "https://onlinetutor2022.netlify.app/",
        icon: img1
    },
    
    {
        name: "Monico Mart ",
        description: "An ecommerce website.Where Customer can order their product  by categories easily. ",
        github: "https://github.com/Mr-Shamuel/Monico_mart",
        live: "https://monicomart.netlify.app/",
        icon: img13
    },
    {
        name: "Ema John",
        description: "It is an e-commerce site like as amazon where user can order their desire products easily. ",
        github: "https://github.com/Mr-Shamuel/Ema-john-Clients",
        live: "https://ema-john-simple-2ae1c.web.app/",
        icon: img2
    },
    {
        name: "Cooking Master",
        description: "It’s a Food recipes site where anyone can search their favorite food also can see the ingredients of the food.",
        github: "https://github.com/Mr-Shamuel/Cooking-Master-Final",
        live: "https://mr-shamuel.github.io/Cooking-Master-Final/",
        icon: img3
    },
    {
        name: "CRUISE QUEEN",
        description: "It's a ticket booking website where user can purchase Ticket and booked cabin room by online.  ",
        github: "https://github.com/Mr-Shamuel/Burj-Al-Arab",
        live: "https://mr-shamuel.github.io/Cruise-Queen-js-/",
        icon: img4
    },
 
    {
        name: "Dhaka Rider",
        description: "Dhak Rider website is like uber or pathao. where user can choose their transport and select destination on map.",
        github: "https://github.com/Mr-Shamuel/Dhaka-Rider",
        live: "https://dhakarider.netlify.app/",
        icon: img6
    },
    {
        name: "Bd Cricket Player",
        description: "It's a site where you can buy bangladesh top famous cricket players for you  personal team.!!",
        github: "https://github.com/Mr-Shamuel/Cricket-player",
        live: "https://bdplayer.netlify.app/",
        icon: img7
    },
    {
        name: "Our-Bank",
        description: "It's a clone of a Bank. Where you can Deposit and withdraw money and you  also can see your current balance.",
        github: "https://github.com/Mr-Shamuel/Our-Bank",
        live: "https://mr-shamuel.github.io/Our-Bank/",
        icon: img8
    },
    {
        name: "Penguin Fashion",
        description: "It's a site where user can buy their formal , casual and sports shoes. which price are low. ",
        github: "https://github.com/Mr-Shamuel/Responsive-Assignment-2",
        live: "https://mr-shamuel.github.io/Responsive-Assignment-2/.",
        icon: img9
    },
    {
        name: "Fancy-Slider",
        description: "A website where user can find any kind of picture by searcing their name. Also can make a image slider.",
        github: "https://github.com/Mr-Shamuel/Fancy-Slider",
        live: "https://mr-shamuel.github.io/Fancy-Slider/",
        icon: img10

    },
    {
        name: "Phone-Crasher",
        description: "It's a bootstrap project also completely responsive for mobile desktop and laptop and otheres device. ",
        github: "https://github.com/Mr-Shamuel/Phone-Crasher-app-Bootstrap-",
        live: "https://mr-shamuel.github.io/Phone-Crasher-app-Bootstrap-/#",
        icon: img11
    },

    {
        name: "PSD TO HTML ",
        description: "It is completely responsive website for mobile, desktop anyother Devices. Here I convert a PSD File to A Html file.",
        github: "https://github.com/Mr-Shamuel/PSD-TO-HTML",
        live: "https://mr-shamuel.github.io/PSD-TO-HTML/",
        icon: img12
    },
]


const AllWork = () => {

    return (
        <div className="container">
            
               <div className="allwork pt-2 pb-5" data-aos="fade-down">
                <h3 className="text-center ">My <span className="text-warning ">Works </span></h3>
                <div className="btmline mx-auto "> </div>
                <div className="btmline mx-auto mb-3"> </div>
           

            </div>

        
        


            <div className="row ">

                {
                    worksData.map(info => <WorkData info={info}></WorkData>)
                }

            </div>


        </div>




    );
};

export default AllWork;