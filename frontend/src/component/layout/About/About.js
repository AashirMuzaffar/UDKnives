import React from "react";
import "./aboutSection.css";
import { Button, Typography } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.facebook.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <img
              style={{ width: "12vmax", height: "12vmax", margin: "2vmax 0" }}
              src='/favicon.png'
              alt="UD knives"
            />
            {/* <Typography>the ud knives</Typography> */}
            <Button onClick={visitInstagram} color="primary">
              Visit Facebook
            </Button>
            <span>
              This is a Eommerce wesbite made by @UDknives.Where you can find your desired Premium Products.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brand</Typography>
            <a
              href="https://www.facebook.com"
              target="blank"
            >

              <Facebook className="facebookSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



