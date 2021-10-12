import {
    Container,
    Heading,
    FormControl,
    FormLabel,
    Switch,
    Text,
} from '@chakra-ui/react';
import React from 'react';

function Header() {
    return (
        <Container>
            <Heading as='h1' size='lg'>
                Social Media Dashboard
            </Heading>
            <Text>Total Followers: 23,004</Text>
            <FormControl
                borderTop='1px solid black'
                display={{ base: 'flex' }}
                justifyContent={{ base: 'space-between' }}
                alignItems={{ base: 'center' }}
            >
                <FormLabel htmlFor='theme-switch' mb='0'>
                    Dark Mode
                </FormLabel>
                <Switch id='theme-switch' />
            </FormControl>
        </Container>
    );
}

export default Header;
