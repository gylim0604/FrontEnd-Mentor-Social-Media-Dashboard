# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Social media dashboard with theme switcher solution](#frontend-mentor---social-media-dashboard-with-theme-switcher-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

### Links

- Solution URL: [Github](https://github.com/gylim0604/FrontEnd-Mentor-Social-Media-Dashboard)
- Live Site URL: [Vercel](https://front-end-mentor-social-media-dashboard.vercel.app/)

## My process

### Built with

- Next.js - React framework
- Chakra-UI - React component library
- Mobile-first workflow
- CSS Grid


### What I learned

Today I learnt that linear-gradietns can't be used with borders. So for example :
```css

.border{
  border: 10px solid;
  border-color: linear-gradient(to left, black,white);
}
```
does not product border with linear-gradient.

After doing some research, I found 2 ways to solve this issue, one was to use *border-image*, the other using pseudo-elements. Using the *border-image* property was the simpler solution, and could be done as such: 
```css
.border{
  border: 10px solid;
  border-image: linear-gradient(to left, black,white) 30;
}
```

However, there was a catch, and that was *border-image* does not work with *border-radius*, and unfortunately I required *border-radius* to complete this task. 

I resorted to the more complex pseudo-element solution, essentially creating an after-element with a background of the linear gradient, and setting the margin of the after-element so that it would be visible. 


### Useful resources

- [CSS Tricks](https://css-tricks.com/gradient-borders-in-css/) - Article on creating linear-gradient borders.

## Author

- Frontend Mentor - [@gylim0604](https://www.frontendmentor.io/profile/gylim0604)

