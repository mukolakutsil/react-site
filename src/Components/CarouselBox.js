import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel className="car">
                <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        alt="mazda cx-5"
                        src="https://img1.goodfon.ru/wallpaper/nbig/d/77/2015-mazda-mx-5-miata-us-spec-7001.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Mazda 3</h3>
                        <p>Mazda 3  the firs car on brend Mazda</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        alt="mazda 6"
                        src="https://img3.goodfon.ru/wallpaper/nbig/8/50/mazda-6-zima-sneg-sledy.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Mazda cx-5</h3>
                        <p>Winter mottors mazda the best!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        alt="mazda 6"
                        src="https://img3.goodfon.ru/wallpaper/nbig/6/35/mazda-rx7-tuning-turbo-jdm-3971.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Mazda 7</h3>
                        <p>The best spor-mazda)</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

