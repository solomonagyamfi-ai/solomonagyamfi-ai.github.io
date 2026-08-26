/* =========================================================
   SOLOMON GYAMFI PORTFOLIO - MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

if (menuButton && navigation) {

  menuButton.addEventListener('click', () => {

    const isOpen = navigation.classList.toggle('open');

    menuButton.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

  });


  // Close mobile menu when a navigation link is clicked
  navigation.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', () => {

      navigation.classList.remove('open');

      menuButton.setAttribute(
        'aria-expanded',
        'false'
      );

    });

  });

}


/* =========================================================
   PROJECT FILTERS
========================================================= */

const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {

  button.addEventListener('click', () => {

    const selectedFilter = button.dataset.filter;

    // Update active button
    filterButtons.forEach((item) => {

      item.classList.toggle(
        'active',
        item === button
      );

    });


    // Filter projects
    projectCards.forEach((card) => {

      const tools = (card.dataset.tools || '').split(' ');

      const shouldShow =
        selectedFilter === 'all' ||
        tools.includes(selectedFilter);

      card.hidden = !shouldShow;

    });

  });

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealItems = document.querySelectorAll('.reveal');

if (
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.1
    }
  );


  revealItems.forEach((item) => {

    observer.observe(item);

  });

} else {

  revealItems.forEach((item) => {

    item.classList.add('visible');

  });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement = document.querySelector('#current-year');

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================================
   BACK TO TOP
========================================================= */

function scrollToTop(event) {

  if (event) {
    event.preventDefault();
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

}


/*
   Find the Back to Top link
*/

const backToTopLinks =
  document.querySelectorAll('.back-to-top');


backToTopLinks.forEach((link) => {

  link.addEventListener('click', scrollToTop);

});


/* =========================================================
   HANDLE #TOP LINKS
========================================================= */

/*
   This also catches any other links on the website
   that point to #top.
*/

const topLinks =
  document.querySelectorAll('a[href="#top"]');

topLinks.forEach((link) => {

  link.addEventListener('click', scrollToTop);

});


/* =========================================================
   FORCE TOP POSITION WHEN PAGE LOADS WITH #TOP
========================================================= */

/*
   If someone visits:

   index.html#top

   the browser will normally try to jump to an element
   with id="top".

   We override that behaviour and make sure the page
   starts at the very top.
*/

window.addEventListener('load', () => {

  if (window.location.hash === '#top') {

    history.replaceState(
      null,
      '',
      window.location.pathname +
      window.location.search
    );

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

  }

});


/* =========================================================
   BACK TO TOP - KEYBOARD ACCESSIBILITY
========================================================= */

backToTopLinks.forEach((link) => {

  link.addEventListener('keydown', (event) => {

    if (
      event.key === 'Enter' ||
      event.key === ' '
    ) {

      event.preventDefault();

      scrollToTop();

    }

  });

});


/* =========================================================
   OPTIONAL: SHOW BACK-TO-TOP LINK AFTER SCROLLING
========================================================= */

const backToTopButton =
  document.querySelector('.back-to-top');


if (backToTopButton) {

  window.addEventListener(
    'scroll',
    () => {

      if (window.scrollY > 500) {

        backToTopButton.classList.add('show');

      } else {

        backToTopButton.classList.remove('show');

      }

    },
    {
      passive: true
    }
  );

}
