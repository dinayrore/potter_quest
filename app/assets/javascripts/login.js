console.log("This is the login js file.");





$(document).ready(function() {


	var tab = $('.tabs h3 a');

	tab.on('click', function(event) {
		event.preventDefault();
		tab.removeClass('active');
		$(this).addClass('active');
		console.log(this);

		var tab_content = $(this).attr('href');
		console.log(tab_content);
		$('div[id$="tab-content"]').removeClass('active');
		$('div#' + tab_content).addClass('active');
	});
});
