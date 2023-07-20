import React from 'react'
import './IntroBox.css'

function IntroBox() {
    const textContent = ["Hi, I'm Lapasi.", "I write Code."]
    return (
        <div className='introBox'>
            Hi, I'm {[..."Lapasi"].map((x) => <span className='nameDiv'>{x}</span>)}. I write code.
        </div>
    )
}

export default IntroBox;
