import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
            <h1>ADVENTURE AWAITS </h1>
            <p>What are you waiting for</p>            
            <div className="hero-btns"> {/*Create a button for HeroSection, shortcut: .hero-btns*/}
                <Button /*left button*/
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button> 
                <Button /*right button*/
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle' /> {/*Attach a play button next to WATCH NOW*/}
                </Button>
            </div> 
        </div>
    )
}

export default HeroSection
