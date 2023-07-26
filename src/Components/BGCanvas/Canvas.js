import './Canvas.css';
import {useRef, useEffect} from "react";
import {gsap, Circ} from 'gsap';

let points = [], activepoints = [], color = "156,217,249";
let pointer_r_from = 10, pointer_r_to = 20;
let pointerProps = {
    r: pointer_r_from,
}
let mousePos = {x:-100, y:-100}

function dist_between(p1, p2) {
    return Math.abs(p1.x-p2.x)+Math.abs(p1.y-p2.y);
}

function get_active_points() {
    activepoints = []
    points.map((p) => {
        let x = dist_between(mousePos, p)
        if(x<50) {
            p.active = 0.3;
            p.shifted = false;
            activepoints.push(p);
        }
        else if (x<100)  {
            p.active = 0.1;
            p.shifted = false;
            activepoints.push(p);
        }
        else {
            p.active = 0
        }
    })
}

function generate_points() {
    let numPoints = Math.min(window.innerWidth, window.innerHeight)/30;
    points = []
    let w = window.innerWidth, h = window.innerHeight;
    for(let i=0; i<w ;i = i+w/numPoints) {
        for(let j=0; j<h; j=j+h/numPoints) {
            var px = i + Math.random()*w/numPoints;
            var py = j + Math.random()*h/numPoints;
            var p = {x: px, originX: px, y: py, originY: py, active: 0 };
            points.push(p);
        }
    }

    for(let i=0;i<points.length;i =i+1) {
        let d_Arr = []
        for(let j=0;j<points.length;j=j+1){
            if (j!==i){
                d_Arr.push([j, dist_between(points[i], points[j])]);
            }
        }
        d_Arr.sort((a,b) => a[1]-b[1])
        points[i].closest = d_Arr.slice(0,5);
    }
}

function shiftPoints(p) {
    if (p.shifted) {return;}
    p.shifted = true;
    gsap.to(p, {
        duration: 1+1*Math.random(), 
        x: p.originX+50-Math.random()*50, 
        y: p.originY+50-Math.random()*50, 
        ease: Circ.easeIn,
        yoyo: true,
        onComplete: () => {
            p.shifted = false; 
            shiftPoints(p);
        }
    });
}

function animate() {
    const cvs = document.getElementById('mycanvas');
    const ctx = cvs.getContext('2d');
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.strokeWidth = 2;
    activepoints.map((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, 2*Math.PI);
        ctx.fillStyle = `rgba(${color},${p.active})`
        ctx.fill();
        ctx.strokeStyle = `rgba(${color},${p.active})`
        p.closest.map((c) => {
            if (c[0]<points.length){
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(points[c[0]].x, points[c[0]].y);
                ctx.stroke();
            }
        })
        shiftPoints(p);
    })
    ctx.beginPath();
    ctx.arc(mousePos.x, mousePos.y, pointerProps.r, 0, 2*Math.PI);
    ctx.fillStyle = `rgba(${color},0.2)`;
    ctx.fill();
    //console.log('animating');
    requestAnimationFrame(animate);
}


window.addEventListener('mousemove', (e) => {
    mousePos = {x:e.clientX, y:e.clientY-20};
    get_active_points();
})

window.addEventListener('resize', () => {
    let cvs = document.getElementById("mycanvas");
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    generate_points();
    get_active_points();
})

function Canvas({themeColor}) {
    const cvs = useRef();
    color = themeColor;
    useEffect(() => {
        generate_points();  
        get_active_points(); 
        gsap.to(pointerProps, {
            r: pointer_r_to,
            duration: 2,
            repeat: -1,
            yoyo: true
        })
        animate();
    }, [cvs]);

    return (
        <canvas id="mycanvas" width={window.innerWidth} height={window.innerHeight} ref={cvs}/>
    )
}

export default Canvas;