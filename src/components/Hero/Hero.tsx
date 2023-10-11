
import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import Counter from './components/Counter/Counter'

const Hero = () => {

    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div id='home' className="hero">

            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-gym">
                    <motion.div
                        initial={{ left: mobile ? '165px' : '238px' }}
                        whileInView={{ left: '6px' }}
                        transition={{ type: 'tween', duration: 3 }}
                    />
                    <span>the best fitness club in the town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            In Here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <Counter initial={100} final={140} />
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <Counter initial={938} final={978} />
                        <span>members joined</span>
                    </div>
                    <div>
                        <Counter initial={10} final={50} />
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className='hero-buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>

            </div>
            <div className="right-h">
                <button className='btn'>Join now</button>

                <motion.div
                    className="heart-rate"
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                >
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <img className='hero-image' src={hero_image} alt="" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '21rem' }}
                    transition={transition}

                    src={hero_image_back}
                    alt=""
                    className="hero-image-back"
                />

                <motion.div
                    className="calories"
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                >
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 Kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero