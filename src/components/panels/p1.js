import React from 'react'
import {Parallax} from 'react-scroll-parallax'
import { SceneBg, PanelContainer } from '../elements';
import SquareBox from '../squarebox'

const P1 = ({bg}) => {
    return (
        <PanelContainer>
            
            <Parallax y={[200, 0]} className="">
                <SceneBg src={bg[0]} alt=''/>
            </Parallax>

            <Parallax y={[0,700]} className="">
                <SquareBox text="One hot summer's day..."/>
            </Parallax>
            
            
        </PanelContainer>
    )
}

export default P1
