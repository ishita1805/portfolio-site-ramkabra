import React from 'react'
import './news.css'
import NewsCard from './newsCard'

const News = () => {
    return (
        <div id='news'>
            <h1 className='heading'>In The News</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue nulla blandit nullam diam. Tellus morbi sapien risus vitae in nisl at nisl elementum.</p>
            <NewsCard/>
        </div>
    )
}

export default News
