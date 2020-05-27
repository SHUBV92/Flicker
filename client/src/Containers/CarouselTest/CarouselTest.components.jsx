import React from 'react'

import { Carousel } from "react-bootstrap"

const CarouselTest =()=>{

return(
    <Carousel className="border border-secondary">
        <Carousel.Item>
            <img
            className="d-block w-60"
            style={{width:"900px", height: "900px"}}
            src={require(`../../assets/images/Bundle.jpeg`)}
            alt="Twice Slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Evening Snow</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block "
            style={{width:"80px", height: "80px"}}
            src={require(`../../assets/images/Roses.jpeg`)}
            alt="Twice Slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Evening Snow</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-60"
            style={{width:"80px", height: "80px"}}
            src={require(`../../assets/images/lavenderSoy.jpeg`)}
            alt="Twice Slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Evening Snow</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

)
}

export default CarouselTest;


{/* <div class="border border-secondary">Surrounded by border</div> */}