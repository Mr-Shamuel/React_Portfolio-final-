import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Typewriter from 'typewriter-effect';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './Workdata.css';
 
const WorkData = ({ info }) => {
    console.log(info);
    return (
    
            <div className="col-md-6 col-lg-3 col-12 pb-3">
                <Card className="  Project_card" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="170"
                            image={info.icon}
                            alt="img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            <Typewriter
                                    options={{
                                        strings: [`${info.name}`],

                                        autoStart: true,
                                        delay: 70,
                                        loop: true
                                    }}

                                />
                               
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {info.description}

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions >
                        <div className="projectBtn mx-auto">

                            <a className="btn btn-outline-primary m-2" style={{ textDecoration: 'none', }} href={info.github} rel="noreferrer" target="_blank" ><GitHubIcon  ></GitHubIcon> GitHub</a>
                            <a className="btn btn-outline-danger m-2 " style={{ textDecoration: 'none', }} href={info.live} rel="noreferrer" target="_blank" ><VisibilityIcon className="  "></VisibilityIcon> Live Demo</a>

                        </div>
                    </CardActions>
                </Card>


            </div>
    


    );
};

export default WorkData;