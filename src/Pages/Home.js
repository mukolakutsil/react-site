import React, { Component } from 'react';
import Cards from '../Components/Cards';
import CarouselBox from '../Components/CarouselBox';

class Home extends Component {




    render() {

        return (
            <>
                <CarouselBox />
                <Cards />
            </>
        );
    }
}

export default Home;