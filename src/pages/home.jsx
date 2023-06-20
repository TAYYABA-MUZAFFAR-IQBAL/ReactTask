import { Button } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../components/navbar';
import './home.css';

const HomePage = () => {
    return (
        <>
            <NavBar />
            <div className='container'>
                <div className='top'>
                    <h1 className='mainHeading'> New Sport World
                        In Vientiane</h1>
                    <Button className='bookNow'>Book Now {'>'}{'>'}</Button>
                </div>
                <h3 className='h3'>WHO WE ARE</h3>
                <div className='bottom'>

                    <p>New Arena was established in 2014 with only 2 artificial soccer field and a swimming pool to serve our customers, but now we would like to introduce ourself as a New Arena Sports and fitness center.
                    </p>
                    <br />
                    <p> New Arena is not just a sports and fitness club, it's a perfect place to start your healthy life, get fit, and become stronger in a friendly and fun atmosphere. Our center is designed to meet all kinds of client needs.</p>
                    <Button>Read More</Button>
                </div>
            </div>

        </>
    );
};

export default HomePage;
