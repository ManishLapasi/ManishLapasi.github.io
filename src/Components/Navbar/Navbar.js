import React, { useState, useEffect } from "react"
import './Navbar.css'

let light = '<svg viewBox="0 0 24 24"><circle cx="11.9998" cy="11.9998" r="5.75375" fill="currentColor" transform-origin="11.999799728393555px 11.999799728393555px" style="transform: none; transform-origin: 11.9998px 11.9998px;"></circle><g transform-origin="11.99996030330658px 11.999765396118164px" style="transform: none; transform-origin: 12px 11.9998px;"><circle cx="3.08982" cy="6.85502" r="1.71143" transform="rotate(-60 3.08982 6.85502)" fill="currentColor"></circle><circle cx="3.0903" cy="17.1436" r="1.71143" transform="rotate(-120 3.0903 17.1436)" fill="currentColor"></circle><circle cx="12" cy="22.2881" r="1.71143" fill="currentColor"></circle><circle cx="20.9101" cy="17.1436" r="1.71143" transform="rotate(-60 20.9101 17.1436)" fill="currentColor"></circle><circle cx="20.9101" cy="6.8555" r="1.71143" transform="rotate(-120 20.9101 6.8555)" fill="currentColor"></circle><circle cx="12" cy="1.71143" r="1.71143" fill="currentColor"></circle></g></svg>'
let dark = '<svg viewBox="0 0 50 50"><path d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"  fill="currentColor" style={{transform: "none", "transform-origin": "24.6735px 25.3265px"}}></path></svg>'
let curr = 'light';

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
  document.documentElement.setAttribute('data-theme', storedTheme);
  curr = storedTheme;
}

var darkcolor = "173,173,255";
var lightcolor = "32, 55, 130";

const handleClick = (setColor) => {
  let ele = document.getElementById("toggler");
  let doc = document.body;
  console.log("clicked")


  if (curr==='light'){
    curr = 'dark';
    ele.innerHTML = dark;
    setColor(darkcolor)
  }
  else {
    curr = 'light';
    ele.innerHTML = light;
    
    setColor(lightcolor);
    
  }
  document.documentElement.setAttribute('data-theme', curr);
}

function Navbar({setColor}) {

    const [homeLogo, setHomeLogo] = useState(window.innerWidth>500 ? "text": "logo");

    useEffect(() => {
      function handleResize() {
        if(window.innerWidth>500){
          if(homeLogo!=='text'){setHomeLogo('text')}
        }
        else{
          if(homeLogo!=='logo'){setHomeLogo('logo')}
        }
      }
      window.addEventListener("resize", handleResize)
      return _ => window.removeEventListener('resize', handleResize)
    })

    return (
        <div>
            <nav className="navbar"> 
            <div>
            {homeLogo==='text' ? <a href='https://manishlapasi.github.io' rel="noopener noreferrer">manishlapasi.github.io</a> : <a href='https://manishlapasi.github.io' rel="noopener noreferrer"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="12.000000pt" height="12.000000pt" viewBox="0 0 200.000000 200.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            fill="currentColor" stroke="none">
            <path d="M538 1409 c-469 -375 -471 -377 -413 -415 23 -15 27 -15 51 1 14 9
            204 158 421 332 217 173 400 312 407 310 6 -2 191 -148 411 -324 221 -175 406
            -323 413 -327 35 -21 81 28 62 65 -18 33 -872 709 -895 709 -11 -1 -217 -158
            -457 -351z"/>
            <path d="M397 1022 c-15 -17 -17 -57 -17 -370 0 -342 1 -353 21 -373 19 -19
            29 -20 215 -17 160 2 196 6 204 18 5 8 10 92 10 185 0 94 5 188 11 210 23 81
            111 134 193 115 48 -11 103 -63 116 -110 5 -19 10 -115 10 -212 0 -171 1 -177
            22 -192 33 -23 373 -23 406 0 l22 15 0 358 c0 334 -1 359 -18 374 -24 22 -45
            21 -65 -1 -15 -17 -17 -55 -17 -340 l0 -322 -125 0 -125 0 0 148 c0 184 -13
            234 -77 303 -54 57 -116 84 -193 83 -68 -1 -115 -21 -168 -69 -75 -67 -86
            -106 -90 -298 l-4 -168 -122 3 -121 3 -5 328 c-4 277 -7 329 -20 337 -23 15
            -45 12 -63 -8z"/>
            </g>
            </svg></a>}
            </div>
            <a href="#s1">Skills</a>
            <a href='#s2'>Work</a>
            <a href='#s3'>Projects</a>
            <a href='#s4'>Timeline</a>
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
        </div>
    )
}

export default Navbar;