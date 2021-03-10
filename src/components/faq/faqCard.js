import React, { useState } from 'react'

const FaqCard = ({no,quest,ans,...props}) => {
    const [clicked,setClicked] = useState(false);

    return (
        <>
        <div className='faq-card'>
             <h1>
                {no.includes("1")?<span className='fixer-text'>.</span>:null}
                {no.includes("11")?<span className='fixer-text'>,</span>:null}
                {no}
             </h1>
             <p>{quest}</p>
             <i className={clicked?'fa fa-chevron-up':'fa fa-chevron-down'} onClick={()=>setClicked(!clicked)}></i>
        </div>
        {
            clicked?
            <div className='faq-card-ans'>
                {ans}
            </div>
            :null
        }
        </>
    )
}

export default FaqCard
