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

      // var header = document.getElementById("products-name");
      // var btns = header.getElementsByClassName("btnn");
      // for (var i = 0; i < btns.length; i++) {
      //   btns[i].addEventListener("click", function() {
      //   var current = document.getElementsByClassName("list-active");
      //   current[0].className = current[0].className.replace(" list-active", "");
      //   this.className += " list-active";
      //   });
      // }
      $(document).ready(function()
      {
        $('.list').click(function(){
          const value=$(this).attr('data-filter');
          if(value=='all')
          {
            $('.shower').show('1000');
          }
          else {
            $('.shower').not('.'+value).hide('1000');
            $('.shower').filter('.'+value).show('1000');
          }
        })
      })

      var btnContainer = document.getElementById("size-boxes");

    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("box");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("bactive");
        current[0].className = current[0].className.replace(" bactive", "");
        this.className += " bactive";
      });
    }
