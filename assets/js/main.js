const bookingGuest = document.querySelector('.booking-guest');
const popoverGuest = document.querySelector('.guest-popover'); 
const allWrapper = document.querySelector('.wrapper');
const popoverLanguage =document.querySelector('.popover-language');
const languageSelect = document.querySelector('.language')


function showGuestSelcect(){
    // e.preventDefault();
    popoverGuest.classList.add('open')
    bookingGuest.classList.add('hover')
}
function hideGuestSelcect(){
    // e.preventDefault();
    popoverGuest.classList.remove('open')
    popoverLanguage.classList.remove('open')
    bookingGuest.classList.remove('hover')
}

function showLanguageSelcect(){
    popoverLanguage.classList.toggle('open');
}

bookingGuest.addEventListener('click',showGuestSelcect);
allWrapper.addEventListener('click',hideGuestSelcect);
bookingGuest.onclick = function(e){
    e.stopPropagation();
};
languageSelect.addEventListener('click',showLanguageSelcect);
languageSelect.onclick = function(e){
    e.stopPropagation();
}


// slider
var count = 1;
setInterval(function(){
    document.getElementById('radio' + count).checked = true;
    count ++;
    if(count > 3){
        count = 1;
    }
},5000);

// menu mobile-tablet
const menuMobileTablet = document.querySelector('.menu-mobile-tablet-icon');
const subMenuMobileTablet = document.querySelector('.menu-mobile-tablet__list');
const mask = document.querySelector('.mask') ;
const menuMobileTabletClose = document.querySelector('.menu-mobile-tablet__list-item-close');

function showMenuMobileTablet(){
    // e.preventDefault();
    subMenuMobileTablet.classList.add('open')
    mask.classList.add('open')
}
function hideMenuMobileTablet(){
    // e.preventDefault();
    subMenuMobileTablet.classList.remove('open')
    mask.classList.remove('open')
}
menuMobileTablet.addEventListener('click',showMenuMobileTablet);
menuMobileTabletClose.addEventListener('click',hideMenuMobileTablet);
mask.addEventListener('click',hideMenuMobileTablet);
