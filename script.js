$(function(){
    window.sr = ScrollReveal();
  
    if ($(window).width() < 768) {
        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
    } else {
        sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 800,
        });
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
    }
    
    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });
});

$(document).ready(function() {
  const navbar = document.getElementById("navbar");
  const navbarToggle = navbar.querySelector(".navbar-toggle");

  function openMobileNavbar() {
    navbar.classList.add("opened");
    navbarToggle.setAttribute("aria-label", "Close navigation menu.");
  }

  function closeMobileNavbar() {
    navbar.classList.remove("opened");
    navbarToggle.setAttribute("aria-label", "Open navigation menu.");
  }

  navbarToggle.addEventListener("click", () => {
    if (navbar.classList.contains("opened")) {
      closeMobileNavbar();
    } else {
      openMobileNavbar();
    }
  });

  const navbarMenu = navbar.querySelector(".navbar-menu");
  const navbarLinksContainer = navbar.querySelector(".navbar-links");

  navbarLinksContainer.addEventListener("click", (clickEvent) => {
    clickEvent.stopPropagation();
  });

  navbarMenu.addEventListener("click", closeMobileNavbar);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
});
