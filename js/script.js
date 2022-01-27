var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
 //        navigation: {
 //   nextEl: '.swiper-button-next',
 //   prevEl: '.swiper-button-prev',
 // },
        loop:true,
      });

      var header = document.getElementById("navbarSupportedContent");
      var btns = header.getElementsByClassName("lis");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        });
      }

// navbar=document.querySelector(".navbar-collapse").querySelectorAll("a");
// console.log(navbar);
// navbar.forEach(elements => {
//   elements.addEventListener("click",function(){
//     navbar.forEach(nav => nav.classList.remove("active"))
//     this.classList.add("active");
//     console.log("harsh")
//   })
// });
