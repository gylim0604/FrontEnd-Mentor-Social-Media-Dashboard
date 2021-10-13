import React from 'react';
import { Flex, Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { ArrowDown, ArrowUp } from '../Utils/Icons';

function Card({ icon, title, amount, change }) {
    const bg = useColorModeValue('light--card-gray', 'dark--card-blue');
    const bold = useColorModeValue('light--bold-blue', 'dark--bold--white');
    return (
        <Flex
            flexDir='column'
            bg={bg}
            py='1.5rem'
            px='2rem'
            style={{ gap: '1rem' }}
        >
            <Box d='flex' justifyContent='space-between'>
                <Heading as='h4' size='sm'>
                    {title}
                </Heading>
                {icon}
            </Box>
            <Box d='flex' justifyContent='space-between'>
                <Heading color={bold}>{amount}</Heading>
                <Box
                    as='span'
                    d='flex'
                    flexDir='row'
                    alignItems='center'
                    alignSelf='end'
                    style={{ gap: '3px' }}
                >
                    {change?.direction == 'up' ? <ArrowUp /> : <ArrowDown />}
                    <Text
                        color={
                            change?.direction == 'up'
                                ? 'lime-green'
                                : 'bright-red'
                        }
                    >
                        {change?.value}
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
}

export default Card;
