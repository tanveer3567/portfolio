import React from 'react';
import Hero from '../components/hero';
import Carousel from '../components/carousel';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text}/>
            <Carousel />
        </div>
    );
}

export default HomePage;