$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */



/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		// $('.header-area').sticky({
        //    topSpacing:0
        // });
		
		// //=============

		// $('li.smooth-menu a').bind("click", function(event) {
		// 	event.preventDefault();
		// 	var anchor = $(this);
		// 	$('html, body').stop().animate({
		// 		scrollTop: $(anchor.attr('href')).offset().top - 0
		// 	}, 1200,'easeInOutExpo');
		// });
		
		// $('body').scrollspy({
		// 	target:'.navbar-collapse',
		// 	offset:0
		// });

		//SCROLL-TO LINK
			$('a.smooth-menu').bind('click',function(event){
				var $anchor = $(this);
				var $navbar = $(".navbar").outerHeight();
	
				$('html,body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top - $navbar
				}, 1500, 'easeInOutExpo');
	
				console.log($anchor);
				event.preventDefault();
			});
	
			// NAVBAR TOGGLE
			$(".navbar-toggle").on("click", function () {
				$(this).toggleClass('active');
			  });
	
			/**
			 * ON WINDOW SCROLL EVENTS
			 */
			$(window).scroll(collapseNavbar);
			
			/**
			 * WHEN DOCUMENT READY EVENTS
			 */
			$(document).ready(collapseNavbar);
			
			/**
			 * NAVBAR COLLAPSE
			 */
			function collapseNavbar(){
				if($ (".navbar").length){
					if($(".navbar").offset().top > 50){
						$(".navbar-fixed-top").addClass("top-nav-collapse");
					}else{
						$(".navbar-fixed-top").removeClass("top-nav-collapse");
					}
				}
			}
	
			/**
			 * BOOTSTRAP SCROLL SPY
			 */
			$('body').scrollspy({
				target: ".navbar-fixed-top",
				offset: $(".navbar").outerHeight()
			});

	// 3. Progress-bar
	
		var dataToggleTooTip = $('[data-toggle="tooltip"]');
		var progressBar = $(".progress-bar");
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = $(this).attr('aria-valuenow');
					$(this).width(each_bar_width + '%');
				});
			});
		}
	
	// 4. owl carousel
	
		// i. client (carousel)
		
			$('#client').owlCarousel({
				items:7,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:true,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:4

						},
						1199:{
							items:4
						},
						1200:{
							items:7
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})


    // 5. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });
	
	// 6. Typed
		if ($('.text-slider').length == 1) {
			var typed_strings = $('.text-slider-items').text();
				var typed = new Typed('.text-slider', {
					strings: typed_strings.split(','),
					typeSpeed: 80,
					loop: true,
					backDelay: 1100,
					backSpeed: 30
				});
			}
	
	//7. Color mode
	$('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })
	// 7. Color mode
	// $('.color-mode').click(function(x){
    //     $('.fa-moon-o').toggleClass("active")
	// 	$('body').toggleClass("dark-mode")
		
	// })
	// $(".color-mode").on("click",function(){
	// 	if( $("body").hasClass(".fa-moon-o")){
	// 		$("body").removeClass(".fa-sun-0");
	// 		$(".fa-moon-o").toggleClass("active");
	// 	}else{
	// 		$("body").addClass(".fa-moon-o");
	// 		$(".fa-moon-o").toggleClass("dark-mode")
	// 	}
	// })
});	
	