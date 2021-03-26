import React from 'react'
import {Parallax} from 'react-scroll-parallax'
import { Controller, Scene } from 'react-scrollmagic';
import { SceneBg, PanelContainer } from '../elements';
import SquareBox from '../squarebox'
import Test from '../img/aaa.png'
import styled from 'styled-components'

const P1 = ({bg}) => {

    const Fix = styled.div`
        position: absolute;
        display: flex;
        flex-direction: column;
        max-width:300px;
        top:50%;
        left:50%;
        

        .image {
            max-width: 400px;
        }
    `;


    const TestDiv = styled.div`
        width: 100px;
        height: 50px;
        background-color: blue;

        .Yo {
            width: 50px;
            height: 50px;
            background-color: red;
        }



    `

    return (
        <PanelContainer>
            <Controller>
                <Scene duration={5000} pin={true} enabled={true} offset={0}>
                    <SceneBg src={bg[0]} alt=''/>
                </Scene>
                
                <div className={Fix}>
                    <TestDiv ><div className="Yo"></div></TestDiv>
                    <Parallax y={[-70,550]}>
                        <SquareBox text="One hot summer's day..."/>
                    </Parallax>
                    
                    <Parallax y={[130,0]} >
                        <img src={Test} alt='' style={{'transform': 'scale(0.5)'}}/>  
                        
                    </Parallax>
                    
                </div>
                
                
                        
                        
                {/* <Parallax y={[300, 0]} className={Fix}>                
                        <img src={Test} className="image"/>
                </Parallax>
                         */}
                    
                    
                

                {/* <Scene duration={5000} pin={true} enabled={true} >
                    
                    <Fix className="Fix">
                        <SquareBox text="One hot summer's day..."/>
                        <SquareBox text="test!!!!!"/>
                    </Fix>
                    
                </Scene> */}
                

            </Controller>
            
        </PanelContainer>
        
    )
}

export default P1
