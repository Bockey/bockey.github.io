import React from 'react';
import LandingCarousel from './LandingCarousel';
import Description from './Description';
import Services from './Services';

function Hjem(props) {
    return (
        <div>
            <LandingCarousel/>
            <Description/>
            <Services/>
        </div>
    );
}

export default Hjem;