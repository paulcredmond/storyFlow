$(document).ready(function() {
	// Initial Hiding
	$('.storyBlock').hide();
	$('.storyBlock#start').show();

	// Disable buttons after clicking
	$('.storyBlock .info button').click(function() {
		$(this).addClass('selected');
		$(this).parent().addClass('disabled');
		$(this).parent().find('button').attr('disabled', true);
	});

	// Event Handler
	$('.storyBlock .info button').click(function() {
		// Find link, show block and scroll
		var getID = '#' + $(this).data('link');
		$(getID).show();
		if ( (getID) != '#start' ) {
			$('html,body').animate({ scrollTop: $(getID).offset().top },800);
		} else {
			$('.storyBlock').hide();
			$('.storyBlock#start').show();
			$('.storyBlock button').attr('disabled', false);
			$('.storyBlock .buttons').removeClass('disabled');
			$('.storyBlock .buttons button').removeClass('selected');
			$('html,body').animate({ scrollTop: $('#start').offset().top },800); 
		};
	});
});