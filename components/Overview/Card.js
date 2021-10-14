import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Text,
    useColorModeValue,
    useMediaQuery,
} from '@chakra-ui/react';
import { ArrowDown, ArrowUp } from '../Utils/Icons';

function Card({ icon, title, amount, change }) {
    const bg = useColorModeValue('light--card-gray', 'dark--card-blue');
    const bold = useColorModeValue('light--bold-blue', 'dark--bold--white');
    const [flexGap] = useMediaQuery('(min-width:(1000px)');
    return (
        <Flex
            flexDir='column'
            bg={bg}
            py={{ base: '1.5rem', lg: '1.75rem' }}
            px='2rem'
            style={{ gap: flexGap ? '20rem' : '2rem' }}
            borderRadius='10px'
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
