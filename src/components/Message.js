import React from "react";
import purple from "../images/purple.png";
import { FaInstagram } from "react-icons/fa";

const Message = () => {
  return (
    <header className="header">
      <div className="section-center">
        <div className="header-container">
          <img
            src={purple}
            alt="envelope"
            className="img"
          />
          <div className="header-info">
            <h4>Our new platform</h4>
            <h4>is underway. </h4>
            <h4>Stay Tuned! </h4>
          </div>
          <div className="header-socials">
            Let's connect:{" "}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Message;
