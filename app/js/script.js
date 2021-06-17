//Hamburger Button Animation
const hamburgerBtn = document.querySelector('#hamburgerBtn');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
 
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
    });

   
        