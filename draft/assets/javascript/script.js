$(document).ready(function(){

	$('a.button-position button').click(function(){
		$('.box').toggleClass("box-transform");

		var p = $('.box').css("width");

		if(p!="300px"){
			$('.box-content p').css({
				display:"none"
			})
		}else{
			$('.box-content p').css({
				display:"block"
			})
		}


	})

	$('button.menu').click(function(){
		$('.dropdown-menu').toggleClass('dropdown-menu1');
		$('.menus').toggleClass('menus1');
	})

}); 