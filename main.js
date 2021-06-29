// 'use strict';

// const profile = [
//   {
//     img: './image/Layer18_1.png',
//     desc: 'As the president, he is responsible for new strategic initiatives.',
//     deno: 'President',
//   },
//   {
//     img: './image/Layer18_1.png',
//     desc: "As one of the cofounders and the CEO, He is responsible for company's strategy",
//     deno: 'CEO',
//   },
//   {
//     img: './image/Layer18_1.png',
//     desc: 'Is responsible for global business development and strategic account management.',
//     deno: 'Executive',
//   },
// ];

// const container = document.querySelector('.row');
// let singleProfile = document.createElement('div');

// singleProfile.setAttribute('class', 'col');
// container.appendChild(singleProfile);
// let profileCoulmn = document.querySelector('.col');
// profileCoulmn.style.display = 'grid';
// profileCoulmn.style.gridtemplateColumn = '1fr 1fr 1fr';
// profileCoulmn.style.width = '100px';
// profileCoulmn.style.float = 'left';
// profileCoulmn.style.background = 'grey';

// container.appendChild(singleProfile);

// window.addEventListener('DOMContentLoaded', function () {
//   let displayProfiles = profile.map(function (each) {
//     return `<img src=${each.img} alt="img">
//     <h3 class="row-grid-desc">${each.desc}</h3>
//     <h2 class="row-grid-deno">${each.deno}</h2>`;
//   });
//   displayProfiles.join('');
//   container.innerHTML = displayProfiles;
// });

// const randomNum = random => Math.trunc(random * Math.random());

// const dropdownBtn = document.querySelector('.bars');

// const dropdownContent = document.querySelector('.dropdown-content');

// let clicked = true;

// dropdownBtn.addEventListener('click', function () {
//   if (clicked) {
//     dropdownContent.style.display = 'block';
//     // dropdownMenu.style.transitionDelay = '0.3s';
//     clicked = false;
//   } else {
//     dropdownContent.style.display = 'none';
//     clicked = true;
//   }
// });

// dropdown - JQuery animation

$(document).ready(function () {
  $('.bars').click(() => {
    $('.dropdown-content').animate({
      height: 'toggle',
    });
  });
});

// let drop = true;

// dropdownBtn.addEventListener('click', () => {
//   if (drop) {
//     dropdownMenu.style.display = 'block';
//     drop = false;
//   } else {
//     dropdownMenu.style.display = 'none';
//     drop = true;
//   }
// });

// const parent = document.querySelector('.section-5');
// const child = document.createElement('div');

// for (var i = 0; i < 3; i++) {
//   parent.style.overflow = 'none';
//   parent.style.height = '100%';
//   child.style.width = '100px';
//   child.style.height = '100px';
//   child.style.display = 'flex';
//   // child.style.float = 'left';
//   child.style.overflow = 'none';
//   child.style.background =
//     '#' + Math.floor(Math.random() * 16777215).toString(16);
//   child.style.display = 'inline-block';
//   parent.appendChild(child);

//   // insert firstchild image
//   // const childOne = document.createElement('img');
//   // child.style.width = '100%';
//   // childOne.child.appendChild(childOne);
// }

// console.log(child);
// // Create dots to scroll
// const dotsContainer = document.querySelector('.dots');
// dotsContainer.style.height = '33px';
// dotsContainer.style.width = '100px';
// dotsContainer.style.background = 'green';
// dotsContainer.style.marginLeft = 'auto';
// dotsContainer.style.marginRight = 'auto';
// dotsContainer.style.marginBottom = '30px';

// parent.appendChild(dotsContainer);

// const dotsToSection = function () {
//   for (var i = 0; i < 3; i++) {
//     const dots = document.createElement('div');
//     dots.style.width = '15px';
//     dots.style.height = '15px';
//     dots.style.float = 'left';
//     // dots.style.display = 'flex';
//     // dots.style.justifyContent = 'center';
//     dots.style.textAlign = 'center';
//     dots.style.cursor = 'pointer';
//     dots.style.margin = '0px auto';

//     dots.style.background = 'white';
//     dots.style.borderRadius = '50%';
//     dotsContainer.appendChild(dots);
//     dots.style.marginLeft = '7x';
//   }
// };
// dotsToSection();

// const header = document.querySelector('header');

// console.log(header.offsetWidth);
