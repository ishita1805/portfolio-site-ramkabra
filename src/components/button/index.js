import React from 'react'
import './button.css'
const index = (props) => {
    return (
        <div className='button' onClick={props.onClick}>
            {props.label}
        </div>
    )
}

export default index
