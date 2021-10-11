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
            <Heading>Social Media Dashboard</Heading>
            <Text>Total Followers: 23,004</Text>
            <FormControl>
                <FormLabel htmlFor='theme-switch' mb='0'>
                    Dark Mode
                </FormLabel>
                <Switch id='theme-switch' />
            </FormControl>
        </Container>
    );
}

export default Header;
