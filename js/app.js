/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
let isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
function removeActive() {
    let active = document.querySelector('.active');
    if (active) {
        active.classList.remove('active');
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let navigation = document.getElementById('navbar__list');

[1, 2, 3, 4].forEach(function (number) {
    let section_node = document.createElement('li');
    section_node.addEventListener("click", goToSection);
    section_node.setAttribute("id", `menu_section${number}`);
    section_node.appendChild(document.createTextNode(`section${number}`));
    section_node.style.cssText = "float:left;cursor: pointer;";
    section_node.classList.add("menu__link");
    navigation.appendChild(section_node);
});

function goToSection(element) {
    removeActive();
    element.srcElement.classList.toggle('active');
    document.getElementById(element.srcElement.innerText).scrollIntoView({
        behavior: 'smooth'
    });
};

// Add class 'active' to section when near top of viewport
var findMe = document.querySelectorAll('.section');

window.addEventListener('scroll', function (event) {
    // add event on scroll
    findMe.forEach(element => {
        //for each .thisisatest
        if (isInViewport(element)) {
            //if in Viewport
            removeActive();
            document.getElementById(`menu_${element.id}`).classList.add("active");
        }
    });
}, false);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


