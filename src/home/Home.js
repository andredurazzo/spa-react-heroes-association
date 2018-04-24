import React, { Component } from "react";
import { Carousel } from "react-materialize";

import image1 from "../static/carousel1.jpg";
import image2 from "../static/carousel2.jpg";
import image3 from "../static/carousel3.jpg";

class Home extends Component {
    render() {
        return (
            <Carousel
                options={{ duration: 200, fullWidth: true }}
                images={[
                    image1, image2, image3
                ]}
            />
        );
    }
}

export default Home;