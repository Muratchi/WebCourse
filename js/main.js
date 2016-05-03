$(function(){
	var hamburgerButton = $('#hamburger-button');
	hamburgerButton.click(function() {
			$(this).children().toggleClass('cancel-button');
			$(this).toggleClass('cancel-master');
			$('header>nav').toggleClass('nav-animate');
	});
})