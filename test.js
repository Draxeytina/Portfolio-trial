/* eslint-disable no-unused-vars */
function myFunction() {
  // make mobile nav list disappear and appear
  
  const x = document.getElementById('menu-item');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
  } else {
    x.style.display = 'flex';
  }

  // set the hamburger icon to close when clicked
  const y = document.getElementById('menu-item');
  if (y.className === 'menu-items') {
    y.className += ' responsive';
  } else {
    y.className = 'menu-items';
  }
  let icon = document.getElementsByClassName('fa-bars')[0];
  if (icon) {
    icon.className = icon.className.replace('fa-bars', 'fa-times');
  } else {
    icon = document.getElementsByClassName('fa-times')[0];
    icon.className = icon.className.replace('fa-times', 'fa-bars');
  }

  // make the welcome text invisible when mobile menu appear
  const z = document.getElementById('welcome-top');
  if (z.style.display === 'none') {
    z.style.display = 'flex';
  } else {
    z.style.display = 'none';
  }
}
