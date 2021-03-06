import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            
            <div className='footer1'>
                <h2>Dr. Shriram Kabra</h2>
                <p>Email:  shriramkabra28@gmail.com</p>
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
    )
}

export default Footer
