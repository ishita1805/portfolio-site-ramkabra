import React,{ useState } from 'react'
import './about.css'
import image from '../../assets/placeholder.jpg'
import bulletLeft from '../../assets/bulletLeft.png'
import bulletRight from '../../assets/bulletRight.png'
import Affiliations from '../affiliations'
import Stats from '../stats'

const About = () => {
    const [extra, setExtra] = useState(false);
    return (
        <div id="abt">
        <div id='about'>
            <h1 className='heading'>About</h1>
            <div className='about-cont'>

                <div className='about-cont-in-1'>

                    <div className='about-img-left'>
                        <img src={image} alt='dr'/>
                    </div>

                    <div className='about-2'>
                        <div>
                            <h3>Dr. Shriram Kabra</h3>
                            <br/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus suspendisse nunc in est. Euismod massa tempus diam lectus ultricies risus. Nibh neque amet quis mauris diam vivamus et fames. Pharetra ullamcorper commodo aliquam nec. Tempor, mauris urna dictum ullamcorper. Elementum velit sit cursus sed est at turpis. Enim consequat massa semper dignissim morbi sapien tortor mi lectus. Aliquam fringilla sit ut et egestas adipiscing consectetur aliquet. Adipiscing volutpat maecenas pharetra, nulla volutpat, lorem convallis leo.
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus suspendisse nunc in est. Euismod massa tempus diam lectus ultricies risus. Nibh neque amet quis mauris diam vivamus et fames. 
                            </p>
                        </div>
                        <img src={bulletLeft} alt='bullet' className='bullet-left'/>
                    </div>

                    <div className='about-2'>
                        <div>
                            <h3>Publications anf Presentations <i class={extra?'fa fa-chevron-up clickable':'fa fa-chevron-down clickable'} onClick={()=>setExtra(!extra)}></i></h3>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, amet, id arcu quam tincidunt congue amet
                                {extra?
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus suspendisse nunc in est. Euismod massa tempus diam lectus ultricies risus. Nibh neque amet quis mauris diam vivamus et fames. Pharetra ullamcorper commodo aliquam nec. Tempor, mauris urna dictum ullamcorper. Elementum velit sit cursus sed est at turpis. Enim consequat massa semper dignissim morbi sapien tortor mi lectus. Aliquam fringilla sit ut et egestas adipiscing consectetur aliquet. Adipiscing volutpat maecenas pharetra, nulla volutpat, lorem convallis leo.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus suspendisse nunc in est. Euismod massa tempus diam lectus ultricies risus. Nibh neque amet quis mauris diam vivamus et fames. Pharetra ullamcorper commodo aliquam nec. Tempor, mauris urna dictum ullamcorper. Elementum velit sit cursus sed est at turpis. Enim consequat massa semper dignissim morbi sapien tortor mi lectus. Aliquam fringilla sit ut et egestas adipiscing consectetur aliquet. Adipiscing volutpat maecenas pharetra, nulla volutpat, lorem convallis leo.`:
                                "..."}</p>
                        </div>
                        <img src={bulletLeft} alt='bullet' className='bullet-left'/>
                    </div>

                </div>

                <div className='about-cont-in-2'>

                    <div className='about-1'>
                        <img src={bulletRight} alt='bullet' className='bullet-right'/>
                        <div>
                            <h3>DNB</h3>
                            <p>Pushpawati Singgania Research Institute, Delhi<br/>2008</p>
                            <h3>MD (Medicine)</h3>
                            <p>Safdarjung Hospital, Delhi<br/>2001</p>
                            <h3>MBBS</h3>
                            <p>University College of Medical Sciences, Delhi<br/>1997</p>
                        </div>
                    </div>

                    <div className='about-img-right'>
                        <img src={image} alt='dr'/>
                    </div>

                    <div className='about-1'>
                    <img src={bulletRight} alt='bullet' className='bullet-right'/>
                        <div>
                            <h3>Hospitals and Visitations </h3>

                            <h4>Sarvoday  Hospital and Research Center, S-8</h4>
                            <p>YMCA Road, Landmark: Near ESI Hospital, Sector - 8, Faridabad, Haryana </p>

                            <h4>Sarvoday  Hospital and Research Center, S-19</h4>
                            <p>Sector 19, Gopi colony, Faridabad, Haryana, Tel: (0129) 4194444</p>

                            <h4>City Kidney Clinic</h4>
                            <p>C - 38, Landmark: Near Surya Hospital, East Krishna Nagar, New Delhi, Delhi</p>

                            <h4>Palwal Dialysis Center</h4>
                            <p>C - 38, Landmark: Near Surya Hospital, East Krishna Nagar, New Delhi, Delhi</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <Affiliations/>
        <Stats/>
        </div>
    )
}

export default About
