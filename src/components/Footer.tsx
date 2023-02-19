import React, { FC } from "react";
import "../styles/Footer.css";

const Footer:FC = () => {
    return (
        <>
        <footer id="contact">
        <h1>
            Contact
        </h1>
        <div className="footer-items">
            <h2>
                Need me?
            </h2>
            <div className="footer-items-container">
                <div className="footer-item">
                    <a href="https://www.linkedin.com/in/jake-tran-a72330266/" className="footer-link">
                    <img src={require("../imgs/linkedin.png")} className="footer-image"></img>
                    <label>Linkedin</label>
                    </a>
                </div>
                <div className="footer-item">
                    <a href="https://github.com/Jtech3029" className="footer-link">
                    <img src={require("../imgs/github.png")} className="footer-image"></img>
                    <label>Github</label>
                    </a>
                </div>
            </div>
        </div>
        </footer>
        </>
    )
}

export default Footer;