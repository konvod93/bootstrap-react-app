import React from "react";
import { Carousel } from "react-bootstrap";
import ocean1 from "../img/ocean1.jpg";
import ocean2 from "../img/ocean2.jpg";
import ocean3 from "../img/ocean3.jpg";


export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item style={{'height': '660px'}}>
                <img
                    className="d-block width-100"
                    src={ocean1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Do do nostrud est aliqua</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '660px'}}>
                <img
                    className="d-block width-100"
                    src={ocean2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Do do nostrud est aliqua</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '660px'}}>
                <img
                    className="d-block width-100"
                    src={ocean3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Do do nostrud est aliqua</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}