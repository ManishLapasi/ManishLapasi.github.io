import React from 'react'
import './IntroBox.css'

function IntroBox() {
    const textContent = ["Hi, I'm Lapasi.", "I write Code."]
    return (
        <div className='centeredContent'>
            {textContent.map((line,i) => <p className={"p"+i.toString()} style={{opacity: 0}}>{line}</p>)}
        </div>
    )
}

export default IntroBox;
