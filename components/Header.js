import {
    Container,
    Heading,
    FormControl,
    FormLabel,
    Switch,
    Text,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bold = useColorModeValue('light--bold-blue', 'dark--bold--white');
    const borderColor = useColorModeValue(
        'light--text-gray',
        'dark--text-blue'
    );
    const switchBg = useColorModeValue(
        'hsl(230, 22%, 74%)',
        'linear gradient (to left ,hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
    );
    return (
        <Container>
            <Heading as='h1' size='lg' color={bold}>
                Social Media Dashboard
            </Heading>
            <Text pb='1rem'>Total Followers: 23,004</Text>
            <FormControl
                borderTop='1px solid'
                borderTopColor={borderColor}
                display={{ base: 'flex' }}
                justifyContent={{ base: 'space-between' }}
                alignItems={{ base: 'center' }}
                py='1rem'
                my='1rem'
            >
                <FormLabel htmlFor='theme-switch' mb='0' fontWeight='700'>
                    Dark Mode
                </FormLabel>
                <Switch
                    id='theme-switch'
                    onChange={toggleColorMode}
                    defaultChecked={false}
                    colorScheme='dark--switch'
                    style={{
                        transform: 'rotate(180deg)',
                    }}
                />
            </FormControl>
        </Container>
    );
}

export default Header;
