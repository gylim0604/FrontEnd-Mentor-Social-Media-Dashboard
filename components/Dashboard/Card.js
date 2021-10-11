import { VStack, Box, Text } from '@chakra-ui/react';
import React from 'react';

function Card({ color, logo, handle, amount, unit, duration }) {
    return (
        <VStack>
            <Box>
                {logo} {handle}
            </Box>
            <Box>
                <Text textAlign='center'>
                    {amount}
                    <br />
                    <Box as='span'>{unit}</Box>
                </Text>
            </Box>
            <Box>
                <Text>{duration}</Text>
            </Box>
        </VStack>
    );
}

export default Card;
