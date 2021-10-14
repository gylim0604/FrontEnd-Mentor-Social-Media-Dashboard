import { Container, Grid } from '@chakra-ui/layout';
import React from 'react';
import { Heading, useColorModeValue } from '@chakra-ui/react';
import Card from './Card';
import { Facebook, Instagram, Twitter, Youtube } from '../Utils/Icons';
function DailyOverview() {
    const bold = useColorModeValue('light--bold-blue', 'dark--bold--white');
    return (
        <Container Container maxW={{ lg: 'container.lg' }} py={{ lg: '4rem' }}>
            <Heading as='h3' fontSize='1.5rem' pb='2rem' color={bold}>
                Overview - Today
            </Heading>
            <Grid
                gap={{ base: '1rem', lg: '2rem' }}
                gridTemplateColumns={{ lg: 'repeat(4,1fr)' }}
            >
                <Card
                    icon={<Facebook />}
                    title='Page Views'
                    amount='87'
                    change={{ value: '3%', direction: 'up' }}
                />
                <Card
                    icon={<Facebook />}
                    title='Likes'
                    amount='52'
                    change={{ value: '2%' }}
                />
                <Card
                    icon={<Instagram />}
                    title='Likes'
                    amount='5462'
                    change={{ value: '2257%', direction: 'down' }}
                />
                <Card
                    icon={<Instagram />}
                    title='Profile Views'
                    amount='52k'
                    change={{ value: '1375%', direction: 'up' }}
                />
                <Card
                    icon={<Twitter />}
                    title='Retweets'
                    amount='117'
                    change={{ value: '303%', direction: 'up' }}
                />
                <Card
                    icon={<Twitter />}
                    title='Likes'
                    amount='507'
                    change={{ value: '553%', direction: 'up' }}
                />
                <Card
                    icon={<Youtube />}
                    title='Likes'
                    amount='107'
                    change={{ value: '19%', direction: 'down' }}
                />
                <Card
                    icon={<Youtube />}
                    title='Total Views'
                    amount='1407'
                    change={{ value: '12%', direction: 'down' }}
                />
            </Grid>
        </Container>
    );
}

export default DailyOverview;
