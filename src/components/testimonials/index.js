/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import './testimonial.css'
import TestimonialCard from './terstimonialCard'

const Testimonial = () => {
    const [selected, setSelected] = useState(0);
    const data = [
        {
            name: 'Ishita Kabra',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus purus, velit eu consequat, purus amet purus, posuere. Vulputate faucibus turpis risus porttitor urna. Bibendum diam vitae nec sed fermentum velit velit urna integer. Tincidunt lacus, donec orci eros fermentum, velit volutpat gravida sed. At ullamcorper integer diam mattis elementum vel eu eu eget.'
        },
        {
            name: 'Meghana Kabra',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus purus, velit eu consequat, purus amet purus, posuere. Vulputate faucibus turpis risus porttitor urna. Bibendum diam vitae nec sed fermentum velit velit urna integer. Tincidunt lacus, donec orci eros fermentum, velit volutpat gravida sed. At ullamcorper integer diam mattis elementum vel eu eu eget.'
        },
        {
            name: 'Eshan Kabra',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus purus, velit eu consequat, purus amet purus, posuere. Vulputate faucibus turpis risus porttitor urna. Bibendum diam vitae nec sed fermentum velit velit urna integer. Tincidunt lacus, donec orci eros fermentum, velit volutpat gravida sed. At ullamcorper integer diam mattis elementum vel eu eu eget.'
        },
        {
            name: 'Jon Snow',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus purus, velit eu consequat, purus amet purus, posuere. Vulputate faucibus turpis risus porttitor urna. Bibendum diam vitae nec sed fermentum velit velit urna integer. Tincidunt lacus, donec orci eros fermentum, velit volutpat gravida sed. At ullamcorper integer diam mattis elementum vel eu eu eget.'
        },
    ]

    return (
        <div id='testimonials'>
            <i className='fa fa-quote-right'></i>
            {
                data.map((item, index) => {
                    if(index === selected) 
                    return <TestimonialCard
                    name={item.name}
                    testimonial={item.testimonial}
                    />
                })
            }
           
            <div className='dots-testimonial'>
                {data.map((item,index)=> {
                    if(index === selected) 
                    return <span className='selected' onClick={()=>setSelected(index)}></span>
                    else 
                    return <span onClick={()=>setSelected(index)}></span>

                })}
            </div>
        </div>
    )
}

export default Testimonial
