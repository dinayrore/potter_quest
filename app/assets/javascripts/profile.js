console.log('this is profile js!! you did it!');

$(document).ready(function() {

	var tab = $('.tabs h3 a');

	tab.on('click', function(event) {
		event.preventDefault();
		tab.removeClass('active');
		$(this).addClass('active');

		var tab_content = $(this).attr('id');
		$('div[id$="tab-content"]').removeClass('active');
		$('div#' + tab_content).addClass('active');
	});


	/** BELOW HERE IS EVENT LISTENER FOR NAVIGATION BAR */

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
	})




});
