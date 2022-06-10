import React from 'react';
import './Experince.css'
import VerifiedIcon from '@mui/icons-material/Verified';

const Experince = () => {
    return (
        <div className="  explore_tutor">
            <section class="sectionnGap"></section>
            <div className="exp" data-aos="fade-down">
                <h3 className="text-center"> What skills I have <br /> <span className="text-warning ">My Experince</span></h3>
                <div className="btmline mx-auto "> </div>
                <div className="btmline mx-auto"> </div>

            </div>



            <section class="sectionnGap"></section>



            <div className="Explore" >

                <div className="join "data-aos="zoom-in-right" data-aos-duration="1500">
                    <h4> Frontend Development</h4>
                    <div className="language .row d-flex pb-2">
                        <div className="col-md-6 ">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon> HTML </h5>
                        </div>
                        <div className="col-md-6 ">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon> CSS </h5>
                        </div>
                    </div>
                    <div className="language .row d-flex pb-2">
                        <div className="col-md-6">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon> Bootstrap </h5>
                        </div>
                        <div className="col-md-6">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon> Javascript </h5>
                        </div>
                    </div>
                    <div className="language .row d-flex pb-2">
                        <div className="col-md-6">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon> React </h5>
                        </div>
                        <div className="col-md-6">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon> API </h5>
                        </div>
                    </div>
                    <div className="language .row d-flex pb-2">
                        <div className="col-md-6">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon>  Material Ui </h5>
                        </div>

                    </div>
                </div>







                <div className="joint" data-aos="zoom-in-up" data-aos-duration="1500">
                    <h4> Backend Development</h4>
                    <div className="language .row d-flex pb-2">
                        <div className="col-md-6 ">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon> Node js </h5>
                        </div>
                        <div className="col-md-6 ">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon> MongoDb </h5>
                        </div>
                    </div>
                    <div className="language .row d-flex pb-2">
                        <div className="col-md-6">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon> Express js </h5>
                        </div>
                        <div className="col-md-6">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon> Firebase </h5>
                        </div>
                    </div>
                    <div className="language .row d-flex pb-2">
                        <div className="col-md-6">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon> JWT </h5>
                        </div>

                    </div>
                </div>





                <div className="join" data-aos="zoom-in-left" data-aos-duration="1500">
                    <h4> Others <br></br> Skills</h4>
                    <div className="language .row d-flex pb-2">
                        <div className="col-md-6 ">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon>  Photoshop</h5>
                        </div>
                        <div className="col-md-6 ">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon>MS Word </h5>
                        </div>
                    </div>
                    <div className="language .row d-flex pb-2">
                        <div className="col-md-6">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon> PowerPoint </h5>
                        </div>
                        <div className="col-md-6">
                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon> MS Excel </h5>
                        </div>
                    </div>
                    <div className="language .row d-flex pb-2">
                        <div className="col-md-6">

                            <h5> <VerifiedIcon className="text-info"></VerifiedIcon>Data Entry </h5>
                        </div>
                        <div className="col-md-6">


                        </div>
                    </div>

                </div>





                {/* backenddeveloment */}



            </div>
            <section class="sectionnGap"></section>

        </div>
    );
};

export default Experince;