import React from 'react'
import './Summary.css'

function Summary() {
    const summaryText = "A software engineer who loves building things for the web, and ensuring they are reliably and scalably performant."
    return (
        <div className='summary'>{summaryText}</div>
    )
}

export default Summary;
