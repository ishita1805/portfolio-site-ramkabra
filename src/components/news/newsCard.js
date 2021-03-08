import React from 'react'
import image from '../../assets/placeholder.jpg'

const newsCard = () => {
    return (
        <div className='news-card'>
            <div className='nc-img'>
                <img src={image} alt='news'/>
            </div>
            <div className='nc-text'>
                <h1>01</h1>
                <div className='nc-text-in'>
                    <div>
                        <b>Demo Title</b>
                        <br/>
                        Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default newsCard
