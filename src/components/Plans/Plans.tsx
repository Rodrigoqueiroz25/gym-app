
import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData';
import rightArrow from '../../assets/rightArrow.png';
import tick from '../../assets/whiteTick.png'

const Plans = () => {

    return (
        <section className="plans">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <header className='plans-header'>
                <span className='stroke-text'>ready to start</span>
                <span>your journey</span>
                <span className='stroke-text'>now withus</span>
            </header>
            <main className="plans-types">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className='features'>
                            {plan.features.map((feature, i) => (
                                <div key={i}>
                                    <img src={tick} alt="" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className='see-more'>
                            <span>See more benefits</span>
                            <img src={rightArrow} alt="" />
                        </div>

                        {/* <div className="join-now"> */}
                        <button className='btn'>Join Now</button>
                        {/* </div> */}
                    </div>
                ))}
            </main>
        </section>
    )
}

export default Plans