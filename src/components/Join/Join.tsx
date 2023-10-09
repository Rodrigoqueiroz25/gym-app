
import React, { SyntheticEvent, useState } from 'react'
import './Join.css';

const Join = () => {

    const [email, setEmail] = useState('');

    function handleClick(e: SyntheticEvent){
        e.preventDefault();
        console.log(email);
    }

    return (
        <section className="join">
            <div className='left-j'>
                <hr />
                <img src="" alt="" />
                <span className='stroke-text'>Ready to </span>
                <span>level up your body</span>
                <span className='stroke-text'> with us ?</span>
            </div>
            <div className='right-j'>
                <form className="email" onSubmit={handleClick}>
                    <input 
                        type="text" 
                        placeholder='Enter your Email Address here...'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className='btn'>Join now</button>
                </form>
            </div>
        </section>
    )
}

export default Join