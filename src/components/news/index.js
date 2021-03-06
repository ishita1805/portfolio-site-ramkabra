import React, {useRef, useState} from 'react'
import './news.css'
import NewsCard from './newsCard'

const News = () => {
    const posRef = useRef();
    const [switchState,setSwitchState] = useState(false);
    const data = [
        {
            id:'01',
            title:'Demo Title',
            decp:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue',
        },
        {
            id:'02',
            title:'Demo Title',
            decp:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue',
        },
        {
            id:'03',
            title:'Demo Title',
            decp:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue',
        },
        {
            id:'04',
            title:'Demo Title',
            decp:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue',
        },
        {
            id:'05',
            title:'Demo Title',
            decp:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue',
        },
        {
            id:'06',
            title:'Demo Title',
            decp:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue',
        }
    ]

    const scrollHandler = () => {
        if(switchState){
            posRef.current.children[0].scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'});
        }
        else {
            posRef.current.children[data.length-1].scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'});
        }
        setSwitchState(!switchState);
    }

    return (
        <div id='news'>
            <h1 className='heading'>In The News</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue nulla blandit nullam diam. Tellus morbi sapien risus vitae in nisl at nisl elementum.</p>
            <div className='next-button'>
                <i className={switchState?'fa fa-chevron-right':'fa fa-chevron-left'} onClick={scrollHandler}></i>
            </div>
            <div className='news-cont' ref={posRef}>
                {data.map(
                    (item) => <NewsCard
                                id={item.id}
                                title={item.title}
                                decp={item.decp}
                            />
                )}
                
            </div>
            
        </div>
    )
}

export default News
