import React, { useState } from 'react'
import './nav.css'
import { Link } from "react-scroll";
import navList from '../../data/homeNav'

const Navbar = () => {
    const [nav,setNavState] = useState(false);
    return (
        <>
        <div className="small-nav">
          <div className="nav-cross" onClick={()=>setNavState(!nav)}>
            <div className={nav?"new-1 cross":"cross"}></div>
            <div className={nav?"new-2":"cross"}></div>
            <div className={nav?"new-3 cross":"cross"}></div>
          </div>
        </div>

        <div className={nav?"Nav2":"Navigation"}>
            {
                navList.map((item)=>(
                        <Link activeClass="active" to={item.id} spy={true} offset={-58} smooth={true} duration={500}>
                            <span onClick={()=>setNavState(!nav)}>{item.label}</span>
                        </Link>
                ))
            }
        </div> 

        <div className="Navigation2">
            {
                navList.map((item)=>(
                        <Link activeClass="active" to={item.id} spy={true} offset={-58} smooth={true} duration={500}>
                            <span>{item.label}</span>
                        </Link>
                ))
            }
        </div> 
        </>
    )
}

export default Navbar
