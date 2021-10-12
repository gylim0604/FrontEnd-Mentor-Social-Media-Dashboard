import { Container, Grid } from '@chakra-ui/layout';
import React from 'react';
import { Heading } from '@chakra-ui/react';
import Card from './Card';
import { Facebook, Instagram, Twitter, Youtube } from '../Utils/Icons';
function DailyOverview() {
    return (
        <Container>
            <Heading>Overview - Today</Heading>
            <Grid gap='1rem'>
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
