
import React, { useState } from 'react'
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Testimonials = () => {

    const transition = {type: 'spring', duration: 3};

    const [index, setIndex] = useState(0);
    const tLength = testimonialsData.length;

    function left(){
        return index === 0 ? setIndex(tLength - 1) : setIndex(prev => prev - 1);
    }

    function right(){
        return index === tLength - 1 ? setIndex(0) : setIndex(prev => prev + 1);
    }



    return (
        <section id='testimonials' className="testimonials">
            <div className='left-t'>
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: 100}}
                    transition={transition}
                    className='review'
                >
                    {testimonialsData[index].review}
                </motion.span>
                <span className='status'>
                    <span className='name'>{testimonialsData[index].name}</span> - {testimonialsData[index].status}
                </span>
            </div>
            <div className="right-t">
                <div className='figure'>
                    <motion.div 
                        className='moldura'
                        initial={{ opacity: 0, x: -100 }}
                        transition={{...transition, duration: 2}}
                        whileInView={{opacity: 1, x: 0}}
                    />
                    <motion.div 
                        className='card'
                        initial={{ opacity: 0, x: 100 }}
                        transition={{...transition, duration: 2}}
                        whileInView={{opacity: 1, x: 0}}
                    />
                    <motion.img 
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -100}}
                        transition={transition}
                        src={testimonialsData[index].image} 
                        alt="" 
                    />
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