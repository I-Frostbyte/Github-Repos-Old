import "./FooterStyles.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "fff", marginRight: "2rem" }} />
                    <div>
                        <p>Bakweri Town, Buea</p>
                        <p>Cameroon</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "fff", marginRight: "2rem" }} />
                    +237-654-131-027</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "fff", marginRight: "2rem" }} />
                    irefyre@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>I am Gilbert Tima. Graduate in Computer Engineering specializing in Telecommunications from the University of Buea and current Dev Trainee with Iknite Space Studio. I am focused and determined and vastly undeterred by the tasks ahead of me.</p>
                <div className="social">
                <FaFacebook 
                    size={30} 
                    style={{color: "fff", marginRight: "1rem" }}
                />
                <FaTwitter 
                    size={30} 
                    style={{color: "fff", marginRight: "1rem" }}
                />
                <FaLinkedin 
                    size={30} 
                    style={{color: "fff", marginRight: "1rem" }}
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer