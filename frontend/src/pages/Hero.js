import React from 'react'

export default function Hero() {
    return (
        <section className='hero-section' id='home'>
            <div className='shape1'></div>
            <div className='shape4'></div>
            <div className='shape2'></div>
            <div className='shape3'></div>
            <div className='container'>
                <div className="hero-content">
                    <div className="text-1">Unleash the musician within</div>
                    <div className="text-2">Welcome to <br /> AI Music Generation</div>
                    <a href="#create-section">
                        <button className='btn'>Try Now</button>
                    </a>
                </div>
            </div>
        </section>
    )
}
