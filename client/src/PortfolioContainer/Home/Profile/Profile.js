import React from 'react';
import Typical from 'react-typical';
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://www.linkedin.com/in/ankit-kumar-cse19/' target="_blank">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href='https://github.com/Ankit-kumar19' target="_blank">
                            <i className="fa fa-github"></i>
                        </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className="highlighted-text">Ankit Kumar</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Technology",
                                    2010,
                                    "Full Stack Developer", 
                                    2010,
                                    "JAVA Developer",
                                    2010,
                                    "Enthusiastic Back-End Tech.",
                                    2010,
                                    "Graduated ComputerScience",
                                    2010,
                                    "FreeLancer",
                                    2010,
                                ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Deepening New Horizon with Data and Technology.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                    <button className="btn primary-btn"
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    > Get in touch! </button>
                        <a href='Ankit-Kumar-CV.pdf' target="_blank">
                            <button className="btn highlighted-btn">My CV</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>            
        </div>
    );
}
