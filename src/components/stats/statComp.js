import React from 'react'

const statComp = (props) => {
    return (
        <div className='statsComp'>
            <h1>{props.val}{props.val>24?'+':null}</h1>
            <p>{props.label}</p>
            
        </div>
    )
}

export default statComp
