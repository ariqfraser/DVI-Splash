import React from 'react'
import {Parallax} from 'react-scroll-parallax'
import { SceneBg, PanelContainer } from '../elements';
import SquareBox from '../squarebox'
const P1 = ({bg}) => {

    const text1="One hot summer's day...";

    return (
        <PanelContainer>

            <SceneBg src={bg[0]} alt=''/>
            <Parallax y={[300,0]} className="world">
                <SquareBox text={text1}/>
            </Parallax>
            
        </PanelContainer>
    )
}

export default P1
