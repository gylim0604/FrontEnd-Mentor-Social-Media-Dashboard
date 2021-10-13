import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';
// Config for color mode
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

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
const styles = {
    global: (props) => ({
        // ':root': {
        //     '--bold-text': mode('light--bold-blue', 'var(--test)')(props),
        // },
        body: {
            color: mode('light--text-gray', 'dark--text-blue')(props),
            bg: mode('light--white', 'dark--bg-blue')(props),
            fontSize: '14px',
            fontWeight: '700',
            boxSizing: 'border-box',
        },
    }),
};
const theme = extendTheme({
    breakpoints,
    // components: {
    //     Container,
    //     Heading,
    // },
    styles,
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
        'light--card-gray': 'hsl(227, 47%, 96%)',
        'light--text-gray': 'hsl(228, 12%, 44%)',
        'light--bold-blue': 'hsl(230, 17%, 14%)',

        // Dark Theme
        'dark--bg-blue': 'hsl(230, 17%, 14%)',
        'dark--top-blue': 'hsl(232, 19%, 15%)',
        'dark--card-blue': 'hsl(228, 28%, 20%)',
        'dark--text-blue': 'hsl(228, 34%, 66%)',
        'dark--bold--white': 'hsl(0, 0%, 100%)',

        'light--switch': {
            100: 'hsl(230, 22%, 74%)',
            200: 'hsl(230, 22%, 74%)',
            300: 'hsl(230, 22%, 74%)',
            500: 'hsl(230, 22%, 74%)',
            700: 'hsl(230, 22%, 74%)',
            900: 'hsl(230, 22%, 74%)',
        },
        'dark--switch': {
            100: 'linear-gradient(to left ,hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
            200: 'linear-gradient(to left ,hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
            300: 'linear-gradient(to left ,hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
            500: 'linear-gradient(to left ,hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
            800: 'linear-gradient(to left ,hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
            900: 'linear-gradient(to left ,hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
        },
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
    config,
});

export default theme;
