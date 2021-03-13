import React from 'react'
import navList from '../../data/homeNav'
import Navbar from '../../components/navbar'
import Landing from '../../components/landing'
import Services from '../../components/services'
import About from '../../components/about'
import News from '../../components/news'
import Facilities from '../../components/facilities'
import Testimonial from '../../components/testimonials'
import FAQ from '../../components/faq'
import FixedIcon from '../../components/iconFixed'
import data from '../../data/smallServiceList'



const Home = () => {
    return (
        <div>
            <Navbar navList={navList}/>
            <Landing/>
            <Services title='Popular Medical Services' data={data}/>
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
