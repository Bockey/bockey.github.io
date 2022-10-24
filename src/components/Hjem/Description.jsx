import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Description(props) {
    return (
        <div className='description'>
            <div className='description-decoration'>

            </div>
            <div className='description-text1'>
                <h2>Assemble-it er et montasjefirma 
                    som ble etablert i 2021. 
                    Vi er 7 ansatte og er i stadig vekst.
                </h2>
                <p>Vi har mange års erfaring og kompetanse innen prosjektledelse, 
                    montasje og spesialtilpasninger i både store og små prosjekter. 
                    Vi har egne biler og riktig utstyr for deres behov.  Innen kort tid 
                    kan vi også tilby lager og lagertjenster. 
                </p>
            </div>
            <div className='description-text2'>
                <p>Vi har mange års erfaring og kompetanse innen prosjektledelse, 
                    montasje og spesialtilpasninger i både store og små prosjekter.  
                </p>
                <Nav.Link href="/om-oss">Om oss</Nav.Link>
            </div>
        </div>
    );
}

export default Description;