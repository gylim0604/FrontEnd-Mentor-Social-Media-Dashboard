import { VStack, Box, Text, useToken } from '@chakra-ui/react';
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from '../Utils/Icons';

function Card({ social_media, handle, amount, unit, change }) {
    // const [facebook, twitter, instagram, youtube] = useToken(
    //     // the key within the theme, in this case `theme.colors`
    //     'colors',
    //     // the subkey(s), resolving to `theme.colors.red.100`
    //     [
    //         'primary-facebook',
    //         'primary-twitter',
    //         'primary-instagram',
    //         'primary-youtube',
    //     ]
    //     // a single fallback or fallback array matching the length of the previous arg
    // );
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
                return <Twitter />;
                break;
            case 'youtube':
                return <Youtube />;
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
            bg='light--light-gray'
            py='2rem'
            textAlign='center'
            borderRadius='7.5px'
            borderTop='5px solid'
            borderTopColor={socialMediaColor(social_media)}
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
                    <Box as='span' fontSize='3rem' color='light--dark-blue'>
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
            >
                <Text>{change?.value}</Text>
            </Box>
        </VStack>
    );
}

export default Card;
