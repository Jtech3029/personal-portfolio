import React, { FC } from "react";
import "../styles/Header.css";

interface props{
    hi?: string
}

const Header:FC<props> = (props) => {

    return(
        <header className="header" id="header">
            <div className="header-personal-information animation-load">
                <h1>
                    <a id="about">
                        About
                    </a>
                </h1>
                <h2 className="header-introduction">
                    {"Hi, my name is Jake"}
                </h2>
                <p className="header-description">
                    I am a student who is interested in learning! I originally started learning web development
                    as a way to break into coding and kept going as I found web development to be fun!
                </p>
                <p className="header-description">
                    outside of web development, I enjoy learning about new things and playing games such as Ready or Not
                    or Read Dead Redemption.
                </p>
            </div>
            <div className="tech-items">
                <div className="tech-item">
                    <img src={require("../imgs/Javascript.png")} className="tech-item-image"></img>
                    <label>Javascript</label>
                </div>
                <div className="tech-item">
                    <img src={require("../imgs/typescript.png")} className="tech-item-image"></img>
                    <label>Typescript</label>
                </div>
                <div className="tech-item">
                    <img src={require("../imgs/HTML5.png")} className="tech-item-image"></img>
                    <label>HTML</label>
                </div>
                <div className="tech-item">
                    <img src={require("../imgs/css.png")} className="tech-item-image"></img>
                    <label>CSS</label>
                </div>
                <div className="tech-item">
                    <img src={require("../imgs/jest.png")} className="tech-item-image"></img>
                    <label>Jest</label>
                </div>
                <div className="tech-item">
                    <img src={require("../imgs/react.png")} className="tech-item-image"></img>
                    <label>React</label>
                </div>
                <div className="tech-item">
                    <img src={require("../imgs/git.png")} className="tech-item-image"></img>
                    <label>Git</label>
                </div>
                <div className="tech-item">
                    <img src={require("../imgs/webpack.png")} className="tech-item-image"></img>
                    <label>Webpack</label>
                </div>
                <div className="tech-item">
                    <img src={require("../imgs/npm.png")} className="tech-item-image"></img>
                    <label>npm</label>
                </div>
            </div>
        </header>
    )
}

export default Header;