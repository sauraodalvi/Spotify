$(document).ready(function() {
    // Smooth scroll on click
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var target = $(this.getAttribute('href'));
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });
  
  // Move the openInNewTab function outside of the document ready block
  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
  