$(document).ready(function(){
	
	var currentPage = 0;
	$('.book')
	.on('click', '.active', nextPage)
	.on('click', '.flipped', prevPage);

	function prevPage() {
	  $('.flipped')
	    .last()
	    .removeClass('flipped')
	    .addClass('active')
	    .siblings('.page')
	    .removeClass('active');
	}
	function nextPage() {
	  $('.active')
	    .removeClass('active')
	    .addClass('flipped')
	    .next('.page')
	    .addClass('active')
	    .siblings();
	}
	$('.nav-bar').find('.nav-bar-content h2').click(function(){
		$('.about-me').animate({
			top: 0
		});
	})
	$('.footer h2').click(function(){
		$('.my-strength').animate({
			bottom: 0
		});
	});
});