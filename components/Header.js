import {
    Container,
    Heading,
    FormControl,
    FormLabel,
    Switch,
    Text,
    Box,
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
        <Container
            maxW={{ lg: 'container.lg' }}
            d={{ lg: 'flex' }}
            justifyContent={{ lg: 'space-between' }}
            py='2rem'
        >
            <Box as='span'>
                <Heading
                    as='h1'
                    fontSize={{ base: '1.5rem', lg: '2rem' }}
                    color={bold}
                >
                    Social Media Dashboard
                </Heading>
                <Text pb='1rem'>Total Followers: 23,004</Text>
            </Box>
            <FormControl
                borderTop={{ base: '1px solid', lg: 'none' }}
                borderTopColor={borderColor}
                display={{ base: 'flex' }}
                justifyContent={{ base: 'space-between' }}
                alignItems={{ base: 'center' }}
                py={{ base: '1rem', lg: 'unset' }}
                my={{ base: '1rem', lg: 'unset' }}
                w={{ lg: '140px' }}
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
                    _focus={{}}
                />
            </FormControl>
        </Container>
    );
}

export default Header;
