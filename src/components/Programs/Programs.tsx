
import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData';
import rightArrow from '../../assets/rightArrow.png';

const Programs = () => {

    return (
        <section className="programs">
            <header className='programs-header'>
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </header>
            <main className="programs-categories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={rightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </main>
        </section>
    )
}

export default Programs