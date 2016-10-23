

	/** BELOW HERE IS EVENT LISTENER FOR NAVIGATION BAR */
$(document).ready(function() {
var navBarShown = false;

$('.nav-bar').on('click', '.nav-icon', function(event) {
  event.preventDefault();
  if (navBarShown === false) {
  $('.option').slideDown();
  navBarShown = true;
} else {
  $('.option').slideUp();
  navBarShown = false;
}
});

});
