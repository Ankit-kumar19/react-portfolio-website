import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    // { label: "Certificates", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JAVA", ratingPercentage: 85 },
    // { skill: "R Languange", ratingPercentage: 65 },
    { skill: "php", ratingPercentage: 45 },
    // { skill: "Scikit Learn", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "Mongo Db", ratingPercentage: 80 },
    { skill: "SQL Server", ratingPercentage: 82 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 85 },
    // { skill: "Django", ratingPercentage: 65 },
    // { skill: "ArcGIS Model Builder", ratingPercentage: 75 },
    // { skill: "Kafka", ratingPercentage: 65 },
    { skill: "MySQL", ratingPercentage: 75 },
  ];

  // const applicationSkillsDetails = [
  //   { skill: "PowerBI", ratingPercentage: 80 },
  //   { skill: "Talend Open Studio", ratingPercentage: 85 },
  //   { skill: "ArcGIS Platform", ratingPercentage: 85 },
  //   { skill: "Grafana", ratingPercentage: 75 },
  //   { skill: "Azure Cloud Server", ratingPercentage: 50 },
  //   { skill: "E&P - Petrel", ratingPercentage: 70 },
  //   { skill: "E&P - Kingdom", ratingPercentage: 85 },
  //   { skill: "E&P - Hampson-Russell", ratingPercentage: 85 },
  //   { skill: "E&P - Paradigm", ratingPercentage: 75 },
  //   // {
  //   //   title: "Real-Time Production Catalyx Dashboard",
  //   //   duration: { fromDate: "May 2022", toDate: "present" },
  //   //   description:
  //   //     "GET APIs services push to external partner for real-time data communication.",
  //   //   subHeading: "Technologies Used: Postgres, PHP, Bootstrap",
  //   // },
  // ];

  const projectsDetails = [
    {
      title: "Real-Time Production Catalyx Dashboard",
      duration: { fromDate: "May 2022", toDate: "present" },
      description:
        "GET APIs services push to external partner for real-time data communication.",
      subHeading: "Technologies Used: Postgres, PHP, Bootstrap",
    },
    {
      title: "The Social Media App",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Social media is a web app developed using MERN Stack . Here , you can create your account and connect with other people , moreover you can create your post and comment on other's post . If you don't like this app which I'm Sure you're gonna like it , you can also delete your Account .",
      subHeading: "Technologies Used:  ReactJs, NodeJs, ExpressJs, MongoDb",
    },
    {
      title: "Quotes-Website Project",
      duration: { fromDate: "Dec 2021", toDate: "Jan 2022" },
      description:
        "This is a React-Firebase Website , where you can add your on quotes , views or anything you want . You can also sort the quotes in ascending and descending order .",
      subHeading:
        "Technologies Used: ReactJs, Firebase, Bootstrap, NodeJs, ExpressJs, MongoDb",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Chitkara University, Punjab, India"}
        subHeading={"BACHELOR's of Engineering"}
        fromDate={"2019"}
        toDate={"Present"}
      />

      <ResumeHeading
        heading={"S.G.G.S Public School, Chandigarh, India"}
        subHeading={"INTEMEDIATE"}
        fromDate={"2018"}
        toDate={"2019"}
      />

      <ResumeHeading
        heading={"vardhman Internationl Public School , Ludhiana, India"}
        subHeading={"MATRICULATION"}
        fromDate={"2016"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"enParadigm Performance Solutions"}
          subHeading={"Product Engineer"}
          fromDate={"2022"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as Product engineer handling Simmulation and data
            Migration development.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Collecting data from different database and storing it in a single
            table in an organised format. Applying date and time stamp to the
            data.
          </span>
          <br />
          <br />
          <span className="resume-description-text">
            - Developed API and real-time monitoring for production and facility
            data.
          </span>
          <br />
          <br />
          <span className="resume-description-text">
            -  Improving Jsp and Servlet Project files to make them more secure and secure.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Application SKILLS */
    // <div
    //   className="resume-screen-container application-skills-container"
    //   key="application-skills"
    // >
    //   {applicationSkillsDetails.map((skill, index) => (
    //     <div className="skill-parent" key={index}>
    //       <div className="heading-bullet"></div>
    //       <span>{skill.skill}</span>
    //       <div className="skill-percentage">
    //         <div
    //           style={{ width: skill.ratingPercentage + "%" }}
    //           className="active-percentage-bar"
    //         ></div>
    //       </div>
    //     </div>
    //   ))}
    // </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports"
        description="Like to cycling, basketball and swimming."
      />
      <ResumeHeading
        heading="Hydroponics"
        description="Build my own hydroponics system and step-by-step understanding the process."
      />
      <ResumeHeading
        heading="Investment"
        description="Started to invest in farming area include ducks and sheep also interest in stock market investment"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
