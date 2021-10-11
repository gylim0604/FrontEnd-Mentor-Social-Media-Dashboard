import { Grid } from '@chakra-ui/layout';
import React from 'react';
import Card from './Card';

function Dashboard() {
    return (
        <Grid gridtemp>
            <Card
                handle='@nathanf'
                amount='1987'
                unit='Followers'
                duration='12 Today'
            />
            <Card
                handle='@nathanf'
                amount='1044'
                unit='Followers'
                duration='99 Today'
            />
            <Card
                handle='@realnathanf'
                amount='11k'
                unit='Followers'
                duration='1099 Today'
            />
            <Card
                handle='Nathan F.'
                amount='8239'
                unit='Subscribers'
                duration='144 Today'
            />
        </Grid>
    );
}

export default Dashboard;
