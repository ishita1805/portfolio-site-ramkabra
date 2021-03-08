import React from 'react'
import './stats.css'
import Statcomp from './statComp'

const Stats = () => {
    const data = [
        {
            label:'Dialysis',
            val:2000
        },
        {
            label:'Years',
            val:24
        },
        {
            label:'Transplants',
            val:300
        },
    ]
    return (
        <div className='stats-cont'>
         { data.map((item) => <Statcomp label={item.label} val={item.val}/>) }
         
        </div>
    )
}

export default Stats
