/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.scss')

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

document.addEventListener('DOMContentLoaded', function(event) {
  let navbar = document.querySelector('#navbar')
  let navbarPosition = document.querySelector('#navbar').offsetTop
  let mainPosition = document.querySelector('#main').offsetTop

  function stickyNavigation() {
    if(window.scrollY >= navbarPosition) {
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }
  }

  window.addEventListener('scroll', stickyNavigation)
})
