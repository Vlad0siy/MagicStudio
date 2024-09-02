import React, {Component} from 'react';
import {Carousel, CarouselItem} from "react-bootstrap";
import StarField from "../StarField";

class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <CarouselItem>
                        <StarField/>
                    </CarouselItem>
                </Carousel>
            </div>
        );
    }
}

export default CarouselBox;