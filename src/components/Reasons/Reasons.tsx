
import React from 'react'
import './Reasons.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';


const Reasons = () => {
    return (
        <section className="reasons">
            <div className="left">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right">
                <span>some reasons</span>
                <div>
                    <span className='stroke-text'>Why</span>
                    <span> choose us?</span>
                </div>

                <div className='details'>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>over 140+ expert coachs</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>train smarter and faster than before</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>1 free program for new member</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>reliable partners</span>
                    </div>
                </div>
                <span id='our-partners'>Our Partners</span>
                <div className="img-partners">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Reasons