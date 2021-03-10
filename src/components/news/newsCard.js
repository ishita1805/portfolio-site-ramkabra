import React from 'react'
import image from '../../assets/placeholder.jpg'

const newsCard = ({id,title,decp,...props}) => {
    return (
        <div className='news-card'>
            <div className='nc-img'>
                <img src={image} alt='news'/>
            </div>
            <div className='nc-text'>
                <h1>{id}</h1>
                <div className='nc-text-in'>
                    <div>
                        <b>{title}</b>
                        <br/>
                        {decp.substring(0,40)}...
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default newsCard
