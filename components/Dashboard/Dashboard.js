import { Container, Grid } from '@chakra-ui/layout';
import React from 'react';
import Card from './Card';

function Dashboard() {
    return (
        <Container maxW={{ lg: 'container.lg' }}>
            <Grid
                gap={{ base: '1rem', lg: '2rem' }}
                gridTemplateColumns={{ lg: 'repeat(4,1fr)' }}
            >
                <Card
                    social_media='facebook'
                    handle='@nathanf'
                    amount='1987'
                    unit='Followers'
                    change={{ direction: 'up', value: '12 Today' }}
                />
                <Card
                    social_media='twitter'
                    handle='@nathanf'
                    amount='1044'
                    unit='Followers'
                    change={{ direction: 'up', value: '99 Today' }}
                />
                <Card
                    social_media='instagram'
                    handle='@realnathanf'
                    amount='11k'
                    unit='Followers'
                    change={{ direction: 'up', value: '1099 Today' }}
                />
                <Card
                    social_media='youtube'
                    handle='Nathan F.'
                    amount='8239'
                    unit='Subscribers'
                    change={{ direction: 'down', value: '144 Today' }}
                />
            </Grid>
        </Container>
    );
}

export default Dashboard;
