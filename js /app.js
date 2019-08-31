
$(document).ready(function () {
    // Read the cookie and if it's defined scroll to id
    var scroll = $.cookie('scroll');
    if(scroll){
        scrollToID(scroll, 1000);
        $.removeCookie('scroll');
    }

    // Handle event onclick, setting the cookie when the href != #
    $('.nav a').click(function (e) {
        e.preventDefault();
        var id = $(this).data('id');
        var href = $(this).attr('href');
        if(href === '#'){
            scrollToID(id, 1000);
        }else{
            $.cookie('scroll', id);
            window.location.href = href;
        }
    });

    // scrollToID function
    function scrollToID(id, speed) {
        var offSet = 70;
        var obj = $('#' + id).offset();
        var targetOffset = obj.top - offSet;
        $('html,body').animate({ scrollTop: targetOffset }, speed);
    }
});

// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
