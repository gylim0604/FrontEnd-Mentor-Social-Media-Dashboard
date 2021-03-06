import { VStack, Box, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    ArrowDown,
    ArrowUp,
} from '../Utils/Icons';

function Card({ social_media, handle, amount, unit, change }) {
    const bg = useColorModeValue('light--card-gray', 'dark--card-blue');
    const bold = useColorModeValue('light--bold-blue', 'dark--bold--white');
    // Could use enums here but for this demo I won't
    const renderIcon = (social_media) => {
        switch (social_media) {
            case 'facebook':
                return <Facebook />;
                break;
            case 'instagram':
                return <Instagram />;
                break;
            case 'twitter':
                return <Twitter h='24px' w='24px' />;
                break;
            case 'youtube':
                return <Youtube h='24px' w='24px' />;
                break;
            default:
                break;
        }
    };
    const socialMediaColor = (social_media) => {
        switch (social_media) {
            case 'facebook':
                return 'primary-facebook';
                break;
            case 'instagram':
                return 'primary-instagram';
                break;
            case 'twitter':
                return 'primary-twitter';
                break;
            case 'youtube':
                return 'primary-youtube';
                break;
            default:
                break;
        }
    };

    return (
        <VStack
            bg={bg}
            py='2rem'
            textAlign='center'
            borderBottomRightRadius='7.5px'
            borderBottomLeftRadius='7.5px'
            borderTop='5px solid transparent'
            pos='relative'
            _after={{
                content: "''",
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '5px',
                margin: '-5px 0' /* !important√© */,
                borderRadius: 'inherit' /* !important√© */,
                background: socialMediaColor(social_media),
                borderRadius: 'unset',
                borderTopLeftRadius: '7.5px',
                borderTopRightRadius: '7.5px',
            }}
        >
            <Box
                d='flex'
                flexDir='row'
                alignItems='center'
                style={{ gap: '1rem' }}
            >
                {renderIcon(social_media)}
                <Text>{handle}</Text>
            </Box>
            <Box>
                <Text>
                    <Box
                        as='span'
                        fontSize={{ base: '3rem', lg: '4rem' }}
                        color={bold}
                    >
                        {amount}
                    </Box>
                    <br />
                    <Box
                        as='span'
                        fontWeight='400'
                        textTransform='uppercase'
                        letterSpacing='6px'
                    >
                        {unit}
                    </Box>
                </Text>
            </Box>
            <Box
                color={change?.direction == 'up' ? 'lime-green' : 'bright-red'}
                d='flex'
                flexDir='row'
                alignItems='center'
                style={{ gap: '3px' }}
                pt={{ lg: '1rem' }}
            >
                {change?.direction == 'up' ? <ArrowUp /> : <ArrowDown />}
                <Text>{change?.value}</Text>
            </Box>
        </VStack>
    );
}

export default Card;
