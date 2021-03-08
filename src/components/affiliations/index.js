import React from 'react'
import './affiliations.css'
import image from '../../assets/placeholder.jpg'

const index = () => {
    return (
        <div id='affiliations'>
            <div className='aff-text'>
                <h1 className='heading'>
                    Accredations and <br/>Affiliations
                </h1>
                <p>
                    Member, International Society of Nephrology.<br/>
                    Member, Indian society of Nephrology.<br/>
                    Member, Delhi Medical association and Indian Medical Association.
                </p>
            </div>

            <div className='aff-img'>
                <img src={image} alt='affiliations'/>
            </div>
         
        </div>
    )
}

export default index
