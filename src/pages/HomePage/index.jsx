import React from 'react';
import Sale from '../../components/Sale';
import Discount from '../../components/Discount';
import SliderContainer from '../../components/SliderContainer';
import RandomContainer from '../../components/RandomContainer';

export default function HomePage() {

    return (
        <div>
            <Sale />
            <SliderContainer />
            <Discount />
            <RandomContainer />
        </div>
    )
}
