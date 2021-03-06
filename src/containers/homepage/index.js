import React from 'react'
import Navbar from '../../components/navbar'
import Landing from '../../components/landing'
import About from '../../components/about'
import Affiliations from '../../components/affiliations'
import Stats from '../../components/stats'
import News from '../../components/news'
import Facilities from '../../components/facilities'
import Testimonial from '../../components/testimonials'
import FAQ from '../../components/faq'



const Home = () => {
    return (
        <div>
            <Navbar/>
            <Landing/>
            <About/>
            <Affiliations/>
            <Stats/>
            <News/>
            <Facilities/>
            <Testimonial/>
            <FAQ/>
        </div>
    )
}

export default Home
