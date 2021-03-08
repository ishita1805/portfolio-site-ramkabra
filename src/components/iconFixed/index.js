import React, { useState } from 'react'
import './iconFixed.css'
import { Link } from 'react-router-dom'

const FixedIcon = () => {
    const [visible,setVisible] = useState(true);
    const [onClickhandler,setOnClickHandler] = useState(false);

    window.onscroll = () => {
        if(window.scrollY === 0 && visible !== true)  setVisible(true);
        else if(window.scrollY > 20 && visible !== false) setVisible(false);
    }
    return (
        <div className={visible?'icon-fixed':'icon-fixed-small'}>
            {
                visible?
                <>
                <Link to='/appointments' exact><span>Book Appointments</span></Link> | <Link to='/patients' exact><span>For Patients</span></Link>
                </>:
                <>
                <div className={!onClickhandler?'icon-1':'icon-2'}>
                
                    <i class={!onClickhandler?'fa fa-chevron-right display':'fa fa-chevron-right hide'} onClick={()=>setOnClickHandler(!onClickhandler)}></i>
                    
                       <div className={onClickhandler?'i display':'i hide'}> <Link to='/appointments' exact><span>Book Appointments</span></Link> | <Link to='/patients' exact><span>For Patients</span></Link> </div>
                        <i class={onClickhandler?'fa fa-chevron-left display':'fa fa-chevron-left hide'} onClick={()=>setOnClickHandler(!onClickhandler)}></i>
                    
            
                </div>
                </>
            }
        </div>
        
    )
}

export default FixedIcon

//  <div className='icon-fixed'>
//             <Link to='/appointments' exact>Book Appointments</Link> | <Link to='/patients' exact>For Patients</Link>
        
//              {
//                 visible?
//                 <>
//                 <Link to='/appointments' exact>Book Appointments</Link> | <Link to='/patients' exact>For Patients</Link>
//                 </>:
//                 <div>
//                     <span>
//                         <Link to='/appointments' exact>Book Appointments</Link> | <Link to='/patients' exact>For Patients</Link>
//                     </span>
//                     <i onClick={()=>setOnClickHandler(!onClickhandler)} class={!onClickhandler?"fa fa-chevron-left":"fa fa-chevron-right"}></i>
//                 </div>
//                 } 
//         </div> 
