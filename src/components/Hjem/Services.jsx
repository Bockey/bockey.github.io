import React from 'react';

function Services(props) {
    return (
        <div className='services'>
            <h2>
                <span>THESE</span>
                <span>ARE</span>
                <span>OUR</span>
                <span>SERVICES</span>
            </h2>
           <div className='services-list'>
            <div className='first'>
                <h3>First</h3>
                <p>Vi har mange års erfaring 
                    og kompetanse innen prosjektledelse, 
                    montasje og spesialtilpasninger.  
                </p>
            </div>
            <div className='second'>
                <h3>Second</h3>
                <p>Vi har mange års erfaring 
                    og kompetanse innen prosjektledelse, 
                    montasje og spesialtilpasninger.  
                </p>
            </div>
            <div className='third'>
                <h3>Third</h3>
                <p>Vi har mange års erfaring 
                    og kompetanse innen prosjektledelse, 
                    montasje og spesialtilpasninger.  
                </p>
            </div>
           </div>
        </div>
    );
}

export default Services;