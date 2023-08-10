import React from "react"
import './Navbar.css'

let light = '<svg viewBox="0 0 24 24"><circle cx="11.9998" cy="11.9998" r="5.75375" fill="currentColor" transform-origin="11.999799728393555px 11.999799728393555px" style="transform: none; transform-origin: 11.9998px 11.9998px;"></circle><g transform-origin="11.99996030330658px 11.999765396118164px" style="transform: none; transform-origin: 12px 11.9998px;"><circle cx="3.08982" cy="6.85502" r="1.71143" transform="rotate(-60 3.08982 6.85502)" fill="currentColor"></circle><circle cx="3.0903" cy="17.1436" r="1.71143" transform="rotate(-120 3.0903 17.1436)" fill="currentColor"></circle><circle cx="12" cy="22.2881" r="1.71143" fill="currentColor"></circle><circle cx="20.9101" cy="17.1436" r="1.71143" transform="rotate(-60 20.9101 17.1436)" fill="currentColor"></circle><circle cx="20.9101" cy="6.8555" r="1.71143" transform="rotate(-120 20.9101 6.8555)" fill="currentColor"></circle><circle cx="12" cy="1.71143" r="1.71143" fill="currentColor"></circle></g></svg>'
let dark = '<svg viewBox="0 0 50 50"><path d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"  fill="currentColor" style={{transform: "none", "transform-origin": "24.6735px 25.3265px"}}></path></svg>'
let curr = 'light';

const handleClick = (setColor) => {
  let ele = document.getElementById("toggler");
  let doc = document.body;

  if (curr==='light'){
    curr = 'dark';
    ele.innerHTML = dark;
    doc.style.setProperty('background-color', 'rgb(28,28,30)');
    doc.style.setProperty('color', 'white');
    doc.style.setProperty('--top-bg-color', 'rgb(28,28,30)');
    doc.style.setProperty('--top-text-color', 'white');
    
    doc.style.setProperty('--color1', '#231557');
    doc.style.setProperty('--color2', '#8f76aa');
    doc.style.setProperty('--color3','#231557'); 
    doc.style.setProperty('--color4','#8f76aa'); 
    doc.style.setProperty('--card-color1', 'rgb(0,64,221)');
    doc.style.setProperty('--card-color2', 'rgb(191,90,242)');
    doc.style.setProperty('--card-desc-bg-color', 'rgb(73, 76, 78)');
    doc.style.setProperty('--card-border-color', 'rgb(0, 0, 0)');
    doc.style.setProperty('--card-border-box-shadow', 'rgba(230,230,230,0.2)');
    doc.style.setProperty('--mouse-color1', 'rgba(35, 21, 87, 0.2)');
    doc.style.setProperty('--mouse-color2', 'rgba(143, 118, 170, 0.2)');
    setColor("94,92,230")

  }
  else {
    curr = 'light';
    ele.innerHTML = light;
    doc.style.setProperty('background-color', 'white');
    doc.style.setProperty('color', 'black');
    doc.style.setProperty('--top-bg-color', 'white');
    doc.style.setProperty('--top-text-color', 'black');
    
    doc.style.setProperty('--color1', '#7dd3fc');
    doc.style.setProperty('--color2', '#6ee7b7');
    doc.style.setProperty('--color3','#7eb4e0'); 
    doc.style.setProperty('--color4','#6ee7b7');
    doc.style.setProperty('--card-color1', '#03a9f4');
    doc.style.setProperty('--card-color2', '#ff0058');
    doc.style.setProperty('--card-desc-bg-color', 'rgb(240,248,255)');
    doc.style.setProperty('--card-border-color', 'rgb(240, 210, 130)');
    doc.style.setProperty('--card-border-box-shadow', 'rgba(0,0,0,0.2)');
    doc.style.setProperty('--mouse-color1', 'rgba(125,211,252,0.2)');
    doc.style.setProperty('--mouse-color2', 'rgba(110, 231, 183,0.2)');
    setColor("156,217,249");
    
  }
}

function Navbar({setColor}) {
    return (
        <div>
            <nav className="navbar">
            <a href='https://manishlapasi.github.io' rel="noopener noreferrer">manishlapasi.github.io</a>
            <a href='#s1'>Work</a>
            <a href='#s2'>Projects</a>
            <a href='#s3'>Timeline</a>
            <div id="toggler" onClick={() => handleClick(setColor)} on>
            <svg viewBox="0 0 24 24">
                <circle cx="11.9998" cy="11.9998" r="5.75375" style={{fill: "currentColor", transformOrigin:"11.999799728393555px 11.999799728393555px"}}></circle>
                <g transform-origin="11.99996030330658px 11.999765396118164px" style={{transformOrigin: "12px 11.9998px"}}>
                <circle cx="3.08982" cy="6.85502" r="1.71143" style={{transform: "rotate(-60 3.08982 6.85502)", fill:"currentColor"}}></circle>
                <circle cx="3.0903" cy="17.1436" r="1.71143" style={{transform:"rotate(-120 3.0903 17.1436)", fill:"currentColor"}}></circle>
                <circle cx="12" cy="22.2881" r="1.71143" style={{fill:"currentColor"}}></circle>
                <circle cx="20.9101" cy="17.1436" r="1.71143" style={{transform:"rotate(-60 20.9101 17.1436)", fill:"currentColor"}}></circle>
                <circle cx="20.9101" cy="6.8555" r="1.71143" style={{transform:"rotate(-120 20.9101 6.8555)", fill:"currentColor"}}></circle>
                <circle cx="12" cy="1.71143" r="1.71143" style={{fill:"currentColor"}}></circle>
                </g>
            </svg>
            </div>
            </nav>
            <hr></hr>
        </div>
    )
}

export default Navbar;