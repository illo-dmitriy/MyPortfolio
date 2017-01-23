$(document).ready(function() {

      $("#bs-example-navbar-collapse-1").on("click","a", function (event) { 
      event.preventDefault(); 
      var id = $(this).attr('href'), 
      top = $(id).offset().top; 
      $('body,html').animate({scrollTop: top}, 1500); 
      }); 

 $("#slide").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true,
      pagination:false,
      rewindSpeed : 10,
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

      $("#owl-carousel").owlCarousel({
            items: 3,
            lazyLoad: true,
            pagination: false,
            navigation: false,
            rewindSpeed : 10,
      }); 

      var owl = $(".owl-carousel");

      $(".prev").click(function(){
            owl.trigger("owl.prev");
      });
      $(".next").click(function(){
            owl.trigger("owl.next");
      });

      //E-mail Ajax Send
      $("form").submit(function() { //Change
            var th = $(this);
            $.ajax({
                  type: "POST",
                  url: "mail.php", //Change
                  data: th.serialize()
            }).done(function() {
                  alert("Thank you!");
                  setTimeout(function() {
                        // Done Functions
                        th.trigger("reset");
                  }, 1000);
            });
            return false;
      });
 

  });


