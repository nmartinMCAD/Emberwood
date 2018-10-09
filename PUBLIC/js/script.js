$(document).ready(function() {

//forces window back to top on reload - preferred for header disappearance/reappearance feature
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

console.log('document loaded');

//Gets current year for copyright info
var d = new Date();
document.getElementById("currentYear").innerHTML = d.getFullYear();

//Hides and Displays header based on scroll
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var headerHeight = $('header').outerHeight();

// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
  didScroll = true;
});
// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 100);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If current position > last position AND scrolled past header...
  if (st > lastScrollTop && st > headerHeight){
    // Scroll Down
    $('header').addClass('header-up').removeClass('header-down');
  } else {
    // Scroll Up
    // If did not scroll past the document (possible on mac)...
    if(st + $(window).height() < $(document).height()) {
      $('header').removeClass('header-up').addClass('header-down');
    }
  }

  lastScrollTop = st;
}

});
