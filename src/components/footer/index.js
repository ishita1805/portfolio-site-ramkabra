import React, { useState } from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import Contact from '../contact'

const Footer = () => {
    const [close,setClose] = useState(true);
    return (
        <>
        {close?null:<Contact close={(data)=>setClose(data)}/>}
        <div className='footer'>
            <div className='footer1'>
                <h2>Dr. Shriram Kabra</h2>
                <div className='foot-icons-2'>
                    <a target='__blank' href='mailto:hriramkabra28@gmail.com'><i class="fa fa-envelope"></i></a>
                    <i class="fa fa-phone clickable" onClick={()=>setClose(false)}></i>
                </div>
                {/* <p>Number: +91 9212391619 /  +91 9003783680</p> */}
                <Link exact target='__blank' to='/privacy-policy'>Privacy Policy @2021</Link>
            </div>


            <div className='footer2'>
                <h3>Designed and Developed by</h3>
                <p><a href='mailto:ishitakabra1805@gmail.com'>Ishita Kabra</a></p>
                <div className='foot-icons'>
                    <a target='__blank' href='https://github.com/ishita1805'><i class="fa fa-github"></i></a>
                    <a target='__blank' href='https://www.linkedin.com/in/ishita-kabra-3b305818b'><i class="fa fa-linkedin"></i></a>
                </div>
            </div>

        </div>
        </>
    )
}

export default Footer
