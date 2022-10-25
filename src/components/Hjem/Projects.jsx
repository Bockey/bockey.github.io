import Carousel from "react-bootstrap/Carousel";

function Projects() {
  return (
    <div className="projects">
      <h2>Some of our projects</h2>
      <Carousel>
        <Carousel.Item>
          <div className="item-layout">
            <div
              className="carousel-image"
              style={{
                backgroundImage:
                  'url("https://www.lindbak.no/assets/img/6.KAMPANJE/GjørDetGodtåMøtes_2022/Abstracta_Zen_Pod_Miljø.jpg")',
              }}
            ></div>
            <div className="carousel-text">
              <h3>Project 1</h3>
              <p>
                Vi har mange års erfaring og kompetanse innen prosjektledelse,
                montasje og spesialtilpasninger. Vi har mange års erfaring og
                kompetanse innen prosjektledelse, montasje og
                spesialtilpasninger.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item-layout">
            <div
              className="carousel-image"
              style={{
                backgroundImage:
                  'url("https://www.lindbak.no/assets/img/6.KAMPANJE/GjørDetGodtåMøtes_2022/Abstracta_Zen_Pod_Holly_Miljo.jpg")',
              }}
            ></div>
            <div className="carousel-text">
              <h3>Project 2</h3>
              <p>
                Vi har mange års erfaring og kompetanse innen prosjektledelse,
                montasje og spesialtilpasninger. Vi har mange års erfaring og
                kompetanse innen prosjektledelse, montasje og
                spesialtilpasninger.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item-layout">
            <div
              className="carousel-image"
              style={{
                backgroundImage:
                  'url("https://www.lindbak.no/assets/img/6.KAMPANJE/GjørDetGodtåMøtes_2022/Fantoni_AcousticRoom-Fantoni-P24_2022-05-02-093159_zkhq.jpg")',
              }}
            ></div>
            <div className="carousel-text">
              <h3>Project 3</h3>
              <p>
                Vi har mange års erfaring og kompetanse innen prosjektledelse,
                montasje og spesialtilpasninger. Vi har mange års erfaring og
                kompetanse innen prosjektledelse, montasje og
                spesialtilpasninger.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;
