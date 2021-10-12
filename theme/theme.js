import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '320px',
    md: '1024px',
    lg: '1400px',
    xl: '2100px',
});
const Heading = {
    // baseStyle: {
    //     textTransform: 'uppercase', // Normally, it is "semibold"
    //     fontWeight: '300',
    // },
};
const Container = {
    baseStyle: {
        px: '1.25rem',
    },
};

const theme = extendTheme({
    breakpoints,
    // components: {
    //     Container,
    //     Heading,
    // },
    styles: {
        global: {
            // styles for the `body`
            body: {
                fontSize: '14px',
                fontWeight: '700',
                boxSizing: 'border-box',
                color: 'light--dark-gray',
            },
        },
    },
    colors: {
        // Primary colors
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        'primary-facebook': 'hsl(208, 92%, 53%)',
        'primary-twitter': 'hsl(203, 89%, 53%)',
        'primary-instagram':
            'linear-gradient(to left, hsl(37, 97%, 70%) , hsl(329, 70%, 58%))',
        'primary-youtube': 'hsl(348, 97%, 39%)',

        // Light Theme
        'light--white': 'hsl(0, 0%, 100%)',
        'light--pale-blue': 'hsl(225, 100%, 98%)',
        'light--light-gray': 'hsl(227, 47%, 96%)',
        'light--dark-gray': 'hsl(228, 12%, 44%)',
        'light--dark-blue': 'hsl(230, 17%, 14%)',

        // Dark Theme
        'dark--bg-blue': 'hsl(0, 0%, 100%)',
        'dark--top-blue': 'hsl(225, 100%, 98%)',
        'dark--card-blue': 'hsl(227, 47%, 96%)',
        'dark--text-blue': 'hsl(228, 12%, 44%)',
        'dark--white': 'hsl(230, 17%, 14%)',
    },
    fonts: {
        heading: 'Inter',
    },
    sizes: {
        container: {
            sm: '640px',
            md: '1000px',
            lg: '1400px',
        },
    },
});

export default theme;
