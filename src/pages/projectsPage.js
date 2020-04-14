import React from 'react';
import Hero from '../components/hero';
import Carousel from '../components/carousel';

function ProjectsPage(props) {

    return(
        <div>
            {/* <Hero  subtitle={props.subtitle} text={props.text}/> */}
            <Carousel />
        </div>
    );
}

export default ProjectsPage;