# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

[![Desktop_version](https://github.com/LidiaRJ/easy-bank-landing-page/blob/main/screenshots/desktop.jpg)](https://github.com/LidiaRJ/easy-bank-landing-page/blob/main/screenshots/desktop.jpg)

[![Desktop_version_active](https://github.com/LidiaRJ/easy-bank-landing-page/blob/main/screenshots/desktop%20active%20.png)](https://github.com/LidiaRJ/easy-bank-landing-page/blob/main/screenshots/desktop%20active%20.png)

[![Mobile_version](https://github.com/LidiaRJ/easy-bank-landing-page/blob/main/screenshots/mobile.jpg)](https://github.com/LidiaRJ/easy-bank-landing-page/blob/main/screenshots/mobile.jpg)

[![Mobile_version_hamburger](https://github.com/LidiaRJ/easy-bank-landing-page/blob/main/screenshots/mobile%20hamburger.jpg)](https://github.com/LidiaRJ/easy-bank-landing-page/blob/main/screenshots/mobile%20hamburger.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass


### What I learned

- A different approach on building the funcionality for the hamburger menu for mobile devices with JavaScript. 
- Better understanding of CSS Grid and the use of flex box and css grid for different sections of the project. 
- Create animations, mixins for media queries, helper classes, stylesheets for global elements and variables. This allowed me to create reusable components for the landing page. 


```js
hamburgerBtn.addEventListener('click', () => {

        if(hamburgerBtn.classList.contains('header__hamburger--active')) {
            hamburgerBtn.classList.remove('header__hamburger--active'); //Close hamburger menu
        } else {
            hamburgerBtn.classList.add('header__hamburger--active'); //Open hamburger menu  
        }

        if(overlay.classList.contains('fade-in')) {
            body.classList.remove('noScroll');//Remove overflow property
            overlay.classList.remove('fade-in'); //Remove overlay
            mobileMenu.classList.remove('fade-in'); 

            overlay.classList.add('fade-out'); 
            mobileMenu.classList.add('fade-out'); //Remove menu container

           
        } else {
            body.classList.add('noScroll'); //Hide overflow content when menu open
            overlay.classList.remove('has-fade');
            mobileMenu.classList.remove('has-fade');

            overlay.classList.remove('fade-out');
            mobileMenu.classList.remove('fade-out');

            overlay.classList.add('fade-in'); //Add overlay
            mobileMenu.classList.add('fade-in'); //Show menu container 
            
        }
```

### Continued development

Keep working with Sass files and learning the many advantages over regular CSS. 
Practicing the just learn workflow, creating different scss files for each section of the project.

### Useful resources

- [freeCodeCamp YouTube channel](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ) - This helped me learning from other people's workflow and approach to reach similar results. 
- [coder Coder YouTube Channel](https://www.youtube.com/channel/UCzNf0liwUzMN6_pixbQlMhQ) - This is an amazing youtube channel to follow along while building projects. You can see the entire process without previously being planned out. You'll learn how to debug and research code necessary for projects you're building. 


## Author

- Website - [Lidia Ruiz Jimeno](https://www.behance.net/Lidiarjimeno)
- Frontend Mentor - [@LidiaRJ](https://www.frontendmentor.io/profile/LidiaRJ)
- Github - [@LidiaRJ](https://github.com/LidiaRJ)
- Codepen - (https://codepen.io/lilyrj)



## Acknowledgments
Thanks to freeCodeCamp and @coder_coder for the video tutorial on how to create a landing page from start to finish. Her solution was a great inspiration and an amazing resource to learn a better workflow. 



