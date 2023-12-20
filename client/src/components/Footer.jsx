import React from "react";
import "./FooterStyle.css";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Tucson, Arizona</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              520-420-8132
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              bkwilliamscancode@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Brian Williams</h4>
          <p>
            My name is Brian Williams I am a Full Stack Web Developer
            specializing in the MERN Stack. I enjoy UX/UI projects and design
            challenges
          </p>
          <div className="social">
            {/* <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            /> */}

            <a href="https://github.com/bkwilliamsmerncode">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            </a>
            <a href="https://www.linkedin.com/in/brian-williams-05568a2a2">
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
