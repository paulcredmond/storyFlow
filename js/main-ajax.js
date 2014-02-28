$.ajaxSetup ({
	cache: false
});

$(function () {
  $("#loading").ajaxStart(function () {
      $(this).show();
  });

  $("#loading").ajaxStop(function () {
      $(this).hide();
  });
});

$(document).on('click', '.storyBlock .buttons button', function() {
	// Disable buttons after clicking
	$(this).addClass('selected');
	$(this).parent().addClass('disabled');
	$(this).parent().find('button').attr('disabled', true);

	// Find link
	var getID = $(this).data('link');
	console.log(getID + '.html');
	
	// Load file and insert after last story & reset if start selected
	if ( (getID) != 'start' ) {
		$.ajax(getID + '.html').done(function(html) {
			$('#stories > div:last-child').after(html);
			$('html,body').animate({ scrollTop: $('#' + getID).offset().top },800);
		});
	} else {
		$('.storyBlock').not('#start').remove();
		$('.storyBlock button').attr('disabled', false);
		$('.storyBlock .buttons').removeClass('disabled');
		$('.storyBlock .buttons button').removeClass('selected');		
		$('html,body').animate({ scrollTop: $('#start').offset().top },800);
	};
});