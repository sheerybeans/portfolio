$(document).ready(function(){

	$(initMap);
	  var map;
      function initMap(long,lat) {
      	var longitude = parseFloat(long);
      	var latitude = parseFloat(lat);
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 14.6760413, lng: 121.0437003},	
          zoom: 8
        });
        var uluru = {lat: 14.6760413, lng: 121.0437003};
	 	var map = new google.maps.Map(
      	document.getElementById('map'), {zoom: 10, center: uluru});
  		var marker = new google.maps.Marker({position: uluru, map: map});
  	}
  	
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
	$('.left-content-text h2').click(function(){
		$('.portfolio').animate({
			left:0
		});
	});
	$('.right-content-text h2').click(function(){
		$('.contact').animate({
			right:0
		});
	});
	$('div#close-about-me').click(function(){
		$('.about-me').animate({
			top: "-100%"
		});
	});
	$('div#close-strength').click(function(){
		$('.my-strength').animate({
			bottom: "-100%"
		});
	});
	$('div#close-portfolio').click(function(){
		$('.portfolio').animate({
			left: "-100%"
		});
	});

	$('div#close-contact').click(function(){
		$('.contact').animate({
			right: "-100%"
		});
	});

	$('.about-me-box-inside-elem h2').hover(function(){
		$('.circle-progress-right-elem').toggle({});
		$('.circle-progress-left-elem').toggle({});
	});

	$('.about-me-box-inside-right-sec h2').hover(function(){
		$('.circle-progress-right-sec').toggle({});
		$('.circle-progress-left-sec').toggle({});
	});

	$('.about-me-box-inside h2').hover(function(){
		$('.circle-progress-right-col').toggle({});
		$('.circle-progress-left-col').toggle({});
	});

	$('.about-me-box-inside-right h2').hover(function(){
		$('.circle-progress-right-boot').toggle({});
		$('.circle-progress-left-boot').toggle({});
	});

	$('h2#chmsc-one').mouseover(function(){
		$('.about-me-school-chmsc').fadeIn();	
		$(this).mouseout(function(){
		$('.about-me-school-chmsc').fadeOut();			
		})
	});

	$('h2#chmsc-two').mouseover(function(){
		$('.about-me-school-chmsc-two').fadeIn();	
		$(this).mouseout(function(){
		$('.about-me-school-chmsc-two').fadeOut();			
		})
	});

	$('h2#usls').mouseover(function(){
		$('.about-me-school-usls').fadeIn();	
		$(this).mouseout(function(){
		$('.about-me-school-usls').fadeOut();			
		})
	});

	$('h2#tuitt').mouseover(function(){
		$('.about-me-school-tuitt').fadeIn();	
		$(this).mouseout(function(){
		$('.about-me-school-tuitt').fadeOut();			
		})
	});

	var $cover = $('div#mobile-cover');
	var $covertwo = $('div#web-cover');
	var $coverthree = $('div#mobile-api');
	var $coverfour = $('div#mobile-ui');
	$('div#cover-mobile').hover(
		function(){
			$cover.clearQueue();
			$cover.animate({
				width:"100%"
			});
		},
		function(){
			$cover.animate({
				width:0
			})
		}
	);
	$('div#cover-web').hover(
		function(){
			$covertwo.clearQueue();
			$covertwo.animate({
				width:"100%"
			});
		},
		function(){
			$covertwo.animate({
				width:0
			})
		}
	);
	$('div#cover-api').hover(
		function(){
			$coverthree.clearQueue();
			$coverthree.animate({
				width:"100%"
			});
		},
		function(){
			$coverthree.animate({
				width:0
			})
		}
	);
	$('div#cover-ui').hover(
		function(){
			$coverfour.clearQueue();
			$coverfour.animate({
				width:"100%"
			});
		},
		function(){
			$coverfour.animate({
				width:0
			})
		}
	);

	$('.contact-pea-content-box').mouseover(function(){
		$(this).find('h2').hide();
		$(this).find('h3').show();
	}).mouseout(function(){
		$(this).find('h3').hide();
		$(this).find('h2').show();
	});


});

