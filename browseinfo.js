document.querySelector("#website_cookies_bar > div > div > div > section > div > div > div.col-lg-8.pt16")
document.querySelector("#cookies-consent-essential")
document.querySelector("#cookies-consent-all")


//set cookie
function setCookie(cname, cvalue, exdays) {
    const cookie = new Date();
    cookie.setTime(cookie.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + cookie.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

//get cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
     
    return c.substring(name.length, c.length).trim();

  }

  //check cookies
  function checkCookie() {
    let username = localStorage.getItem("username");
    if (username) {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username) {
            localStorage.setItem("username", username);
        }
    }
}

}
//partner carousel
const partnerCarousel = document.querySelector('.carousel-client');
if (partnerCarousel) {
    new BxSlider(partnerCarousel, {
        auto: true,
        slideWidth: 234,
        minSlides: 2,
        maxSlides: 5,
        controls: false
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const bootstrapCarousel = document.querySelector('.carousel');
    if (bootstrapCarousel) {
        new bootstrap.Carousel(bootstrapCarousel, {
            interval: 3000,
            pause: 'hover',
        });
    }
});


  $(document).ready(function(){
    $('.carousel').carousel({
        interval: 3000, 
        pause: 'hover',
  });
});


document.addEventListener('DOMContentLoaded', function () {
    const partnerLogosCarousel = document.querySelector(".partner-logos");
    if (partnerLogosCarousel) {
        new Slick(partnerLogosCarousel, {
            slidesToShow: 6,
            slideToScroll: 1,
            autoplay: true,
            autuplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 2, // Specify the number of slides for smaller screens
                    }
                }
            ]
        });
    }
});

