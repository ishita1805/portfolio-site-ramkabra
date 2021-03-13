import React from 'react'

const terstimonialCard = ({name,testimonial,...props}) => {
    return (
        <div className='testimonial-card'>
            <h3>{name}</h3>
            <div className='underline'></div>
            <p>
            {testimonial}
            </p>
        </div>
    )
}

export default terstimonialCard
