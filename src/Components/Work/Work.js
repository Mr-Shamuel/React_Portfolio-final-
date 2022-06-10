import React from 'react';
import '../../Components/Work/Work.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import img1 from '../../img/online tutor.PNG';
import img2 from '../../img/cooking.PNG';
import img3 from '../../img/emajohn.PNG';
import img4 from '../../img/ship.PNG';

const Work = () => {
    return (
        <div className="container">
            <section class="sectionnGap"></section>


            <h3 className="text-center">My Recent works <br /> <span className="text-warning ">Portfolio</span></h3>
            <div className="btmline mx-auto"> </div>
            <div className="btmline mx-auto  "> </div>



            <div className="card_container py-5">
                <div className="row">

                    <div className="col-lg-3 col-md-6 col-12 ">
                        <Card className="  Project_card" sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="170"
                                    image={img1}
                                    alt="img"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Online Tutor Finder

                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        An Online Tutor Finder is a website where User (students, parents) can easily find
                                        their desire tutor. Which reduce Human efforts, cost and time.
                                        <br></br>


                                        <b>Technology:</b> HTML5, CSS3, React.js, Node.js, Express.js, MongoDB,
                                        React Router, CONTEXT API, Firebase Authentication.

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions >
                                <div className="projectBtn mx-auto">

                                    <a rel="noreferrer" className="btn btn-outline-primary m-2" style={{ textDecoration: 'none', }} href="https://github.com/Mr-Shamuel/Online-tutor-2022" target="_blank" ><GitHubIcon  ></GitHubIcon> GitHub</a>
                                    <a rel="noreferrer" className="btn btn-outline-danger m-2 " style={{ textDecoration: 'none', }} href="https://onlinetutor2022.netlify.app/" target="_blank" ><VisibilityIcon className="  "></VisibilityIcon> Live Demo</a>

                                </div>
                            </CardActions>
                        </Card>


                    </div>

                    <div className="col-lg-3 col-md-6 col-12 ">
                        <Card className="  Project_card" sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="170"
                                    image={img3}
                                    alt="img"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Ema John
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        It is an e-commerce site like as amazon where user can order their
                                        products
                                        <br></br>


                                        <b>Technology:</b>  HTML5, CSS3, React.js, Node.js, Express.js, MongoDB, React
                                        Router, Firebase Authentication

                                        <br></br> <b>Responsibility:</b>  Add product to cart, update cart, login through
                                        Firebase, search product, Getting data through API.

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions >
                                <div className="projectBtn mx-auto">

                                    <a rel="noreferrer" className="btn btn-outline-primary m-2" style={{ textDecoration: 'none', }} href="https://github.com/Mr-Shamuel/Ema-john-Clients" target="_blank" ><GitHubIcon  ></GitHubIcon> GitHub</a>
                                    <a rel="noreferrer" className="btn btn-outline-danger m-2 " style={{ textDecoration: 'none', }} href="https://ema-john-simple-2ae1c.web.app/" target="_blank" ><VisibilityIcon className="  "></VisibilityIcon> Live Demo</a>

                                </div>
                            </CardActions>
                        </Card>


                    </div>






                    <div className="col-lg-3 col-md-6 col-12 ">
                        <Card className="  Project_card" sx={{ maxWidth: 345 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="170"
                                    image={img2}
                                    alt="img"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                         Cooking Master 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        It’s a Food recipes site where anyone can search their favorite food also
                                        can see the ingredients of the food.
                                        <br></br>


                                        <b>Technology:</b> HTML5, CSS3, Bootstrap, Javascript & API

                                        <br></br> <b>Responsibility:</b>  Search food, see ingredients, Load different types of
                                        food data through API.

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions >
                                <div className="projectBtn mx-auto">

                                    <a rel="noreferrer" className="btn btn-outline-primary m-2" style={{ textDecoration: 'none', }} href="https://github.com/Mr-Shamuel/Cooking-Master-Final" target="_blank" ><GitHubIcon  ></GitHubIcon> GitHub</a>
                                    <a rel="noreferrer" className="btn btn-outline-danger m-2 " style={{ textDecoration: 'none', }} href="https://mr-shamuel.github.io/Cooking-Master-Final/" target="_blank" ><VisibilityIcon className="  "></VisibilityIcon> Live Demo</a>

                                </div>
                            </CardActions>
                        </Card>


                    </div>
                    <div className="col-lg-3 col-md-6 col-12  ">
                        <Card className="  Project_card" sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="170"
                                    image={img4}
                                    alt="img"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                         Cruise-Queen 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        It a Online Ship Ticket Booking System. So Anyone can easily Buy ticket easily And enjoy their travel.
                                        <br></br>


                                        <b>Technology:</b> HTML5, CSS3, Bootstrap, Javascript.

                                        <br></br>
                                        <b>Responsibility:</b> Booked different types of ticket. Can see how much it cost. Calculate every ticket price by javascript.

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions >
                                <div className="projectBtn mx-auto">

                                    <a rel="noreferrer" className="btn btn-outline-primary m-2" style={{ textDecoration: 'none', }} href="https://github.com/Mr-Shamuel/Cruise-Queen-js-" target="_blank" ><GitHubIcon  ></GitHubIcon> GitHub</a>
                                    <a rel="noreferrer" className="btn btn-outline-danger m-2 " style={{ textDecoration: 'none', }} href="https://mr-shamuel.github.io/Cruise-Queen-js-/" target="_blank" ><VisibilityIcon className="  "></VisibilityIcon> Live Demo</a>

                                </div>
                            </CardActions>
                        </Card>


                    </div>







                </div>


            </div>

            <div className="buttonInfo text-center ">
                <Link to="/work" className="btn btn-success w-25 p-2  "> All Works</Link>
            </div>
            <div className="sectionnGap"></div>




        </div>
    );
};

export default Work;