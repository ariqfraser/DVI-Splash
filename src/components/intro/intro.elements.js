import {MdKeyboardArrowDown} from 'react-icons/md';
import styled from 'styled-components'

export const IntroContainer = styled.div`
    height: 110vh;
    width: 100vw;
    display: flex;
    position: relative;
    flex-direction: column;
    jusify-content: center;
    align-items: center;
`

export const IntroH1 = styled.h1`
    font-family: 'Permanent Marker', cursive;
    color: #232323;
    font-weight: 300;
    font-size: 2rem;
    margin: 0;
    padding: 0;

    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
`


export const DownArrow = styled(MdKeyboardArrowDown)`
    font-size: 3rem;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);

    animation: up-down 0.5s ease-in-out alternate infinite;

    @keyframes up-down{
        0% {
            margin-top: 0;
        }
        100% {
            margin-top: -20px;
        }
    }
`