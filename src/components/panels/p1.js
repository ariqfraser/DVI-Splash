import React, {useEffect} from 'react'
import {Parallax} from 'react-scroll-parallax'
import { Controller, Scene } from 'react-scrollmagic';
import { SceneBg, PanelContainer } from '../elements';
import SquareBox from '../squarebox'
import Set1 from '../img/aaa.png'
import Set2 from '../img/aaa2.png'
import Set3 from '../img/aaa3.png'
import Set4 from '../img/aaa4.png'
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

    const Spacer = styled.div`
        height: 100vh;
    `
    
    

    return (
        <div>

            <PanelContainer>
                <Controller>
                    <Scene duration={750} pin={true} enabled={true} offset={0}>
                        <SceneBg src={bg[0]} alt=''/>
                    </Scene>
                    
                    <div className={Fix}>
                        {/* <TestDiv ><div className="Yo"></div></TestDiv> */}
                        <Parallax y={[-70,550]}>
                            <SquareBox text="One hot summer's day..."/>
                        </Parallax>
                        
                        <Parallax y={[10,100]} >
                            <img src={Set1} alt='' style={{'transform': 'scale(0.5)'}}/>  
                        </Parallax>

                        
                    </div>
                </Controller>
            </PanelContainer>

            <Spacer></Spacer>

            <PanelContainer>
                <Controller>
                    
                    <Scene duration={700} pin={true} enabled={true} offset={0}>
                        <SceneBg src={bg[1]} alt=''/>
                    </Scene>

                    <div className={Fix}>
                        <Parallax y={[0,200]}>
                            <SquareBox text="Goldie and her Dad go to an ice cream kiosk near by and try a taster."/>
                        </Parallax>
                        {/* <Parallax y={[0, 500]}>
                            <SquareBox text="and try a taster."/>
                        </Parallax> */}
                        {/* <Parallax y={[0,550]}>
                            <SquareBox text="Goldie and her Dad go to an ice cream kiosk near by and try a taster."/>
                        </Parallax> */}

                        <Parallax y={[10,100]} >
                            <img src={Set2} alt='' style={{'transform': 'scale(0.5)'}}/>  

                            {/* 
                                Have ice cream on the floor.
                                goldie: this one's too soft.
                                
                            */}
                        </Parallax>

                        
                    </div>
                    
                </Controller>
            </PanelContainer>

            <Spacer></Spacer>

            <PanelContainer>
                <Controller>
                    <Scene duration={800} pin={true} enabled={true} offset={0}>
                        <SceneBg src={bg[2]} alt=''/>
                    </Scene>

                    <div className={Fix}>
                        <Parallax y={[0, 0]}>
                            <SquareBox text="So they go to another kiosk..."/>
                        </Parallax>
                        <Parallax y={[10,100]} >
                            <img src={Set3} alt='' style={{'transform': 'scale(0.5)'}}/>  

                            {/* 
                                Have ice cream on the floor.
                                goldie: this one's too soft.
                                
                            */}
                        </Parallax>
                    </div>
                </Controller>
            </PanelContainer>
                            
            <Spacer></Spacer>
            <PanelContainer>
                <Controller>
                    <Scene duration={800} pin={true} enabled={true} offset={0}>
                        <SceneBg src={bg[3]} alt=''/>
                    </Scene>

                    <div className={Fix}>
                        <Parallax y={[0, 800]}>
                            <SquareBox text="They go round the corner and find an ice cream van they've never seen before"/>
                        </Parallax>
                        <Parallax y={[10,100]} id='Last'>
                            <img src={Set4} alt='' style={{'transform': 'scale(0.5)'}}/>  

                            {/* 
                                Have ice cream on the floor.
                                goldie: this one's too soft.
                                
                            */}
                        </Parallax>
                    </div>
                </Controller>
            </PanelContainer>
        </div>
    )
}

export default P1
