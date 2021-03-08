import React from 'react'
import Navbar from '../../components/navbar'
import Landing from '../../components/landing'
import About from '../../components/about'
import News from '../../components/news'
import Facilities from '../../components/facilities'
import Testimonial from '../../components/testimonials'
import FAQ from '../../components/faq'
import FixedIcon from '../../components/iconFixed'



const Home = () => {
    return (
        <div>
            <Navbar/>
            <Landing/>
            <About/>
            <News/>
            <Facilities/>
            <Testimonial/>
            <FAQ/>
            <FixedIcon/>
        </div>
    )
}

export default Home
