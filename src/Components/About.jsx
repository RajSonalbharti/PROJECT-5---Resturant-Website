import React from 'react';
import aboutimage from '../images/about.png';

export default function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMING EVENT</h1>
                <p>Lorem ipsum dolor sit,  Quis sunt rerum ducimus eligendi totam ut fuga omnis!</p>
                <button>Read More</button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt='adfgg'/>
            </div>
        </div>
    )
}
