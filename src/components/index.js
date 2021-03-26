import React from 'react'
import CityBlock from './img/background/CityBlock.jpg';
import Kiosk1 from './img/background/Kiosk1.jpg';
import Kiosk2 from './img/background/Kiosk2.jpg';
import Van from './img/background/Van.jpg';
import {Splash} from './elements'
import Intro from './intro'
import P1 from './panels/p1';
import P2 from './panels/p2';
import styled from 'styled-components'
//import SpeechBox from './speechbox'

const SplashAd = () => {
    const bg = [
        CityBlock,
        Kiosk1,
        Kiosk2,
        Van
    ];


    return (
        <Splash>
            <Intro />
            <P1 bg={bg} text={""}/>
            <P2 />
        </Splash>
    )
}

export default SplashAd
