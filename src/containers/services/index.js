import React from 'react'
import Navbar from '../../components/navbar'
import navList from '../../data/servicesNav'
import AllServices from '../../components/services'
import OneService from '../../components/oneSevice'
import data from '../../data/longServiceList'

const Services = (props) => {

    return (
        <div>
            <Navbar navList={navList}/>
            <OneService name={props.match.params.id}/>
            <AllServices title='All Medical Services' data={data}/>
        </div>
    )
}

export default Services
