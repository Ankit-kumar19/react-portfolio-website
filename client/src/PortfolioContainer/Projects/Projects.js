import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
  
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    const options = {
      loop: true,
      margin: 0,
      nav: true,
      animateIn: "bounceInRight",
      animateOut: "bounceOutRight",
      dots: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    };
  
    return (
      <div>
        <ScreenHeading
          title={"A Bit of My Projects"}
          subHeading={"Development Projects"}
        />
        <section className="project-section fade-in" id={props.id || ""}>
          <div className="container">
            <div className="row">
              <OwlCarousel
                className="owl-carousel"
                id="project-carousel"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-desc">
                      <p>
                        <i className="fa fa-quote-left" />
                        Collecting data from different database and storing it in a single table 
                        in an organised format. Applying date and time stamp to the data.
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Catalyx Project</h5>
                      <p>IT Related</p>
                    </div>
                  </div>
                </div>
  
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Develop a simple REST-API service to deliver data to partner in real-time
                        with MongoDB and NodeJs as backend.
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Social Media App</h5>
                      <p>Development Related</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Improving Jsp and Servlet Project files to make them more secure and secure.
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Evolution Project</h5>
                      <p>IT Related</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Working on an application to help people to find the best size of their ring.
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Ring Sizer</h5>
                      <p>Development Related</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Administering several technical application from Company projects, Drilling
                        to Production.
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Application Technical Support</h5>
                      <p>Maintainance Related</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Devloping Api's with Fast API Gateway and NodeJs as backend.
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Development Project</h5>
                      <p>IT Related</p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>

      </div>
    );
  }