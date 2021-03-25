import React from 'react'
import {BoxWrapper, Box, BoxP} from './box.elements'

const SquareBox = ({text}) => {
    return (

        <BoxWrapper>
            <Box>
                <BoxP>
                    {text}
                </BoxP>
            </Box>
        </BoxWrapper>

    )
}

export default SquareBox
