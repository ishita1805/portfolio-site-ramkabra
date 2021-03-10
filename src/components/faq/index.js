/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import './faq.css'
import FaqCard from './faqCard'
import Button from '../button'

const FAQ = () => {
    const [more,setMore] = useState(8);

    const loadHandler = () => {
        if(data.length !== more) setMore(data.length)
        else setMore(8);
    }
    const data = [
        {
            no:'01',
            quest:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.',
            ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.'
        },
        {
            no:'02',
            quest:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.',
            ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.'
        },
        {
            no:'03',
            quest:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.',
            ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.'
        },
        {
            no:'04',
            quest:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.',
            ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.'
        },
        {
            no:'05',
            quest:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.',
            ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.'
        },
        {
            no:'06',
            quest:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.',
            ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.'
        },
        {
            no:'07',
            quest:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.',
            ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.'
        },
        {
            no:'08',
            quest:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.',
            ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.'
        },
        {
            no:'07',
            quest:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.',
            ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.'
        },
        {
            no:'09',
            quest:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.',
            ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.'
        },
        {
            no:'10',
            quest:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.',
            ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.'
        },
        {
            no:'11',
            quest:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.',
            ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget morbi pharetra consequat, tincidunt sed. Urna, accumsan lectus sapien sit rhoncus.'
        },
    ]
    return (
        <div id='faq'>
            <h1 className='heading'>Frequently Asked Questions</h1>
            <br/>
            <br/>
            {
                data.map((item,index) => {
                    if(index<more) 
                    return <FaqCard 
                    no={item.no} 
                    quest={item.quest} 
                    ans={item.ans}/>
                    else return null;
                })
            }
            <Button label={more===data.length?'Show Less':'Show More'} onClick={loadHandler}/>
        </div>
    )
}

export default FAQ
