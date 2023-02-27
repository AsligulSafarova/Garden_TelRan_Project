import React from 'react';
import Sale from '../../components/Sale';
import Discount from '../../components/Discount';
import SliderContainer from '../../components/SliderContainer';
import AkziiContainer from '../../components/AkziiContainer';

export default function HomePage() {

    return (
        <div>
            <Sale />
            <SliderContainer />
            <Discount />
            <AkziiContainer />
        </div>
    )
}
