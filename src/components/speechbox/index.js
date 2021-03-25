import React from 'react'
import {BoxWrapper, Box, BoxP, Triangle} from './speechbox.elements'

const SpeechBox = ({text, posLeft}) => {
    return (
        <>
            <BoxWrapper posLeft={posLeft}>
                <Box>
                    <BoxP>{text}</BoxP>
                </Box>
                <Triangle posLeft={posLeft}></Triangle>
            </BoxWrapper>
        </>
    )
}

export default SpeechBox
