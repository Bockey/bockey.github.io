import Carousel from 'react-bootstrap/Carousel';

function LandingCarousel(props) {
    return (
        <div className='landing-screen'>
            <div className='header'>
                <h1>
                DIN PARTNER 
                INNEN ALT 
                AV MONTASJE!
                </h1>
            </div>
            <div className="carousel-shadow">
                <Carousel>
                    <Carousel.Item>
                        <div className='carousel-image' style={{backgroundImage: 'url("https://www.lindbak.no/assets/img/INTERIØR/andtradition_ATD_Como_SC53_Lato_LN9_LittlePetra_VB1.jpg")'}}></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel-image' style={{backgroundImage: 'url("https://www.lindbak.no/assets/img/INTERIØR/Mater_TerhoLamp_Bar_Kjokken.jpg")'}}></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel-image' style={{backgroundImage: 'url("https://www.lindbak.no/assets/img/INTERIØR/andtradition_ATD_Como_SC53_Lato_LN9_LittlePetra_VB1.jpg")'}}></div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default LandingCarousel;
