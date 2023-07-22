import React from "react"
import './Road.css'

const Roads = () => {
    const myEvents = [
        {
            dateOf: 'May 2023',
            desc1: "Started interning at Georgia Tech's Center for Quality Growth!",
            desc2: "Building a ML model on spatial data served with a React front-end."
        },
        {
            dateOf: 'May 2023',
            desc1: "Another semester at Georgia Tech complete, and another 4.0!",
            desc2: "Courses: Deep Learning, Game AI, CyberSecurity, Graduate Algorithms"
        },
        {
            dateOf: 'March 2023',
            desc1: 'Published my Music Recommendation App!',
            desc2: 'I wrote a blog on it too!',
            linkDesc1: true,
            linkUrl1: 'https://manishlapasi.github.io/react-spotify',
            linkWordPos1: 0,
            linkDesc2: true,
            linkUrl2: 'https://awstip.com/a-soir%C3%A9e-with-rust-b2de45986e42',
            linkWordPos2: 3
        },
        {
            dateOf: 'Dec 2022',
            desc1: 'My first semester at Georgia tech, complete, with a 4.0!',
            desc2: 'Courses: Database Systems, Knowledge-based AI, Data and Visual Analytics, Computational Data Analytics'
        },
        {
            dateOf: 'Aug 2022',
            desc1: "Left my job at Honeywell to attend Georgia Tech.",
            desc2: "This was a great 2 year experience that taught me a lot. Au revoir!"
        },
        {
            dateOf: 'March 2022',
            desc1: 'Got promoted to Advanced Software Engineer!',
            desc2: ''
        },
        {
            dateOf: 'Aug 2020',
            desc1: 'Joined Honeywell as a SDE.',
            desc2: ''
        },
        {
            dateOf: 'May 2020',
            desc1: "Published an IEEE paper on Algorithms for Obstacle Avoidance!",
            desc2: "Covid won't let me attend the conference though.",
            linkDesc1: true,
            linkUrl1: 'https://ieeexplore.ieee.org/document/9213866',
            linkWordPos1: 0
        },
        {
            dateOf: 'May 2020',
            desc1: "Graduated from IIT Madras with a 3.8 GPA!",
            desc2: "A pretty sweet place to have spent my collegiate life."
        },
        {
            dateOf: 'July 2019',
            desc1: "SpaceX Hyperloop Pod Competition Finalists!",
            desc2: "A thrilling experience interfacing software on embedded systems."
        },
        {
            dateOf: 'May 2019',
            desc1: "Joined GreyOrange Robotics as a SDE Intern.",
            desc2: ""
        }
        
    ]
    return (
        <div className="eventsContainer">
            {myEvents.map((e) =>  
                <div className="myEvent">
                    <div className="eventDate">{e.dateOf}</div>
                    <div>
                    {e.linkDesc1?
                        <div className="eventDesc">{e.desc1.split(' ').map((s,i) => i===e.linkWordPos1?<a href={e.linkUrl1} target="_blank" rel="noopener noreferrer">{s} </a>:<span>{s} </span>)}</div>
                        :
                        <div className="eventDesc">{e.desc1}</div>}
                    {e.linkDesc2?
                        <div className="eventDesc">{e.desc2.split(' ').map((s,i) => i===e.linkWordPos2?<a href={e.linkUrl2} target="_blank" rel="noopener noreferrer">{s} </a>:<span>{s} </span>)}</div>
                        :
                        <div className="eventDesc">{e.desc2}</div>}
                    </div>
                </div> 
            )}
        </div>
    )
}

export default Roads;