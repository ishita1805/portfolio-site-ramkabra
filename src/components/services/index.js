import React from 'react'
import { Link } from 'react-router-dom'
import './services.css'


const Services = ({data,title,...props}) => {
   

    return (
        <div id="servicecards" className='services'>
                <h1>{title}</h1>
                <div className='servicescont'>
                {data.map((item)=>(
                    <div className='service-card'>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <Link to={item.link} exact>View Details <i className='fa fa-chevron-right'></i></Link>
                    </div>
                ))}
                </div>
        </div>
    )
}

export default Services
