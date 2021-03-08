import React from 'react'
import './privacy.css'

const Privacy = () => {
    return (
        <div className='privacy'>
            <h1>Privacy Policy</h1>
            <p>This privacy policy reflects the kind of information this website may want to collect and how it may be used for various purposes.</p>
            <p>
                There are two types of information that we may collect:<br/><br/>
                <b>PERSONAL INFORMATION:</b><br/>
                This information includes Name, Email id, Mobile Number and your message.<br/><br/>
                <b>NON-PERSONAL INFORMATION:</b><br/>
                This information is related to user activities while surfing information on internet and can be captured using 
                some analytics codes, cookies etc.<br/><br/>
                In our constant effort to provide best possible user experience, we will have to capture some information,
                which is non-personal in nature. E.g. Total visitors to website, total time spent on website, flow of user 
                navigation, etc. This information is essential to understanding user behavior on our website which will culminate 
                in an attempt to make the website more user friendly. We may share this info with any third party with sole 
                intention of analysis. We may place cookies which will further help us in tracking user activity. It is a 
                common practice to use cookies. User can decide about deleting these cookies. Tracking-non personalized data 
                depends on the website objectives and may defer from site to site. From time-to-time, we may announce changes 
                to the above policy with the intent to improve user experience.
            </p>
        </div>
    )
}

export default Privacy
