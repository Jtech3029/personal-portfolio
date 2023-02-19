import React, { FC } from "react";
import "../styles/Projects.css";

const Projects:FC = () => {

    return(
        <>
        <div className="projects" id="projects">
            <h1 className="project-title">
                <a>
                    Projects
                </a>
            </h1>
            <div className="project-carousel">
                <div className="project-carousel-item">
                    <img src={require("../imgs/faketify.png")} className="project-carousel-image"></img>
                    <a className="project-carousel-button project-carousel-source" href="https://github.com/Jtech3029/spotify-mock-project">Source Code</a>
                    <a className="project-carousel-button project-carousel-preview" href="https://jtech3029.github.io/spotify-mock-project/">Live Preview</a>
                </div>
                <div className="project-carousel-item">
                    <img src={require("../imgs/battleship.png")} className="project-carousel-image"></img>
                    <a className="project-carousel-button project-carousel-source" href="https://github.com/Jtech3029/Battleship">Source Code</a>
                    <a className="project-carousel-button project-carousel-preview" href="https://jtech3029.github.io/Battleship/dist/index.html">Live Preview</a>
                </div>
                <div className="project-carousel-item">
                    <img src={require("../imgs/memory-card.png")} className="project-carousel-image"></img>
                    <a className="project-carousel-button project-carousel-source" href="https://github.com/Jtech3029/memory-card">Source Code</a>
                    <a className="project-carousel-button project-carousel-preview" href="https://jtech3029.github.io/memory-card/">Live Preview</a>
                </div>
                <div className="project-carousel-item">
                    <img src={require("../imgs/shopping-cart.png")} className="project-carousel-image"></img>
                    <a className="project-carousel-button project-carousel-source" href="https://github.com/Jtech3029/shopping-cart">Source Code</a>
                    <a className="project-carousel-button project-carousel-preview" href="https://jtech3029.github.io/shopping-cart/">Live Preview</a>
                </div>
                <div className="project-carousel-item">
                    <img src={require("../imgs/wheres-waldo.png")} className="project-carousel-image"></img>
                    <a className="project-carousel-button project-carousel-source" href="https://github.com/Jtech3029/wheres-waldo">Source Code</a>
                    <a className="project-carousel-button project-carousel-preview" href="https://wheres-waldo-f450a.web.app/">Live Preview</a>
                </div>
                <div className="project-carousel-item">
                    <img src={require("../imgs/faketify.png")} className="project-carousel-image"></img>
                    <a className="project-carousel-button project-carousel-source" href="https://github.com/Jtech3029/spotify-mock-project">Source Code</a>
                    <a className="project-carousel-button project-carousel-preview" href="https://jtech3029.github.io/spotify-mock-project/">Live Preview</a>
                </div>
                <div className="project-carousel-item">
                    <img src={require("../imgs/battleship.png")} className="project-carousel-image"></img>
                    <a className="project-carousel-button project-carousel-source" href="https://github.com/Jtech3029/Battleship">Source Code</a>
                    <a className="project-carousel-button project-carousel-preview" href="https://jtech3029.github.io/Battleship/dist/index.html">Live Preview</a>
                </div>
                <div className="project-carousel-item">
                    <img src={require("../imgs/memory-card.png")} className="project-carousel-image"></img>
                    <a className="project-carousel-button project-carousel-source" href="https://github.com/Jtech3029/memory-card">Source Code</a>
                    <a className="project-carousel-button project-carousel-preview" href="https://jtech3029.github.io/memory-card/">Live Preview</a>
                </div>
                <div className="project-carousel-item">
                    <img src={require("../imgs/shopping-cart.png")} className="project-carousel-image"></img>
                    <a className="project-carousel-button project-carousel-source" href="https://github.com/Jtech3029/shopping-cart">Source Code</a>
                    <a className="project-carousel-button project-carousel-preview" href="https://jtech3029.github.io/shopping-cart/">Live Preview</a>
                </div>
                <div className="project-carousel-item">
                    <img src={require("../imgs/wheres-waldo.png")} className="project-carousel-image"></img>
                    <a className="project-carousel-button project-carousel-source" href="https://github.com/Jtech3029/wheres-waldo">Source Code</a>
                    <a className="project-carousel-button project-carousel-preview" href="https://wheres-waldo-f450a.web.app/">Live Preview</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;