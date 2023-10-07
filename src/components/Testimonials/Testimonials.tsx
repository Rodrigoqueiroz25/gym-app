
import React, { useState } from 'react'
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonials = () => {

    const [index, setIndex] = useState(0);
    const tLength = testimonialsData.length;

    function left(){
        return index === 0 ? setIndex(tLength - 1) : setIndex(prev => prev - 1);
    }

    function right(){
        return index === tLength - 1 ? setIndex(0) : setIndex(prev => prev + 1);
    }



    return (
        <section className="testimonials">
            <div className='left-t'>
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span className='review'>
                    {testimonialsData[index].review}
                </span>
                <span className='status'>
                    <span className='name'>{testimonialsData[index].name}</span> - {testimonialsData[index].status}
                </span>
            </div>
            <div className="right-t">
                <div className='figure'>
                    <div className='moldura'></div>
                    <div className='card'></div>
                    <img src={testimonialsData[index].image} alt="" />
                    <div className="arrows">
                        <img onClick={left} src={leftArrow} alt="" />
                        <img onClick={right} src={rightArrow} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials