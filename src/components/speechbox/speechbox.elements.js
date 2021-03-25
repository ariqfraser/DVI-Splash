import styled from 'styled-components'

export const BoxWrapper = styled.div`
    margin-left: -50%;
    z-index: 300;
`
export const Box = styled.div`
    min-width: 100px;
    max-width: 300px;
    tex-align: left;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 4px solid black;
    background-color: #fff;
`
export const Triangle = styled.div`
    width: 50px;
    height: 50px;
    border: 4px solid red;
    border-bottom: none;
    border-left: none;
`
export const BoxP = styled.p`
    font-size: 2rem;
    color: #232323;
    padding: 8px 0 ;

    font-family: 'Indie Flower', cursive;
`