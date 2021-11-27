var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$( document ).ready( function() {
	//do jQuery stuff when DOM is ready

	/* Responsive Jquery Navigation */
	$( '.hamburger' ).click( function( event ) {
		$( '.mobilenav' ).toggleClass( 'is-open' );
	} );

	$( '.mobilenav .nav-backdrop' ).click( function() {
		$( '.mobilenav' ).removeClass( 'is-open' );
	} );

	var clickable = $( '.menu-state' ).attr( 'data-clickable' );
	$( '.mobilenav li:has(ul)' ).addClass( 'has-sub' );
	$( '.mobilenav .has-sub>a' ).after( '<em class="caret">' );
	if ( clickable == 'true' ) {
		$( '.mobilenav .has-sub>.caret' ).addClass( 'trigger-caret' );
	} else {
		$( '.mobilenav .has-sub>a' ).addClass( 'trigger-caret' ).attr( 'href','javascript:;' );
	}

	/* menu open and close on single click */
	$( '.mobilenav .has-sub>.trigger-caret' ).click( function() {
		var element = $( this ).parent( 'li' );
		if ( element.hasClass( 'is-open' ) ) {
			element.removeClass( 'is-open' );
			element.find( 'li' ).removeClass( 'is-open' );
			element.find( 'ul' ).slideUp( 200 );
		}
		else {
			element.addClass( 'is-open' );
			element.children( 'ul' ).slideDown( 200 ) ;
			element.siblings( 'li' ).children( 'ul' ).slideUp( 200 );
			element.siblings( 'li' ).removeClass( 'is-open' );
			element.siblings( 'li' ).find( 'li' ).removeClass( 'is-open' );
			element.siblings( 'li' ).find( 'ul' ).slideUp( 200 );
		}
	} );
  
  
  /*banner scroll effect*/
	$(document).ready(function() {
		$(".scroll-downs").click(function() {
		     $('html, body').animate({
		         scrollTop: $(".page-content-section").offset().top
		     }, 1500);
		 });
	});
  
  /*testimonials-slider*/
  $('.testimonials-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    infinite: true,
    cssEase: 'linear',
    arrows: false,
  });
  
  /*partner-slider*/
  $('.special-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    infinite: true,
    cssEase: 'linear',
    arrows: false,
  });
  
  
  /*partner-slider*/
  $('.partner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    infinite: true,
    cssEase: 'linear',
    arrows: true,
  });
  
  /* order-to-ship-slider */
  $('.order-to-ship-slider ').slick({
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    dots: false,
	    infinite: false,
	    autoplay: false,
	    cssEase: 'linear',
	    arrows: true,
	    responsive: [
	        {
	          breakpoint: 1400,
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 1,
	          }
	        },
	        {
	          breakpoint: 1008,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 1,
	          }
	        },
	        {
	          breakpoint: 800,
	          settings: {
	          	slidesToShow: 2,
	            slidesToScroll: 1,
	          }
	        },
          
          {
	          breakpoint: 600,
	          settings: {
	          	slidesToShow: 1,
	            slidesToScroll: 1,
	          }
	        }
	     ]     

	});
  
  
  /* custom-cake-slider */
  $('.cakes-slider').slick({
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    dots: false,
	    infinite: false,
	    autoplay: false,
	    cssEase: 'linear',
	    arrows: true,
	    responsive: [
	        {
	          breakpoint: 1550,
	          settings: {
	            slidesToShow: 4,
	            slidesToScroll: 1,
	          }
	        },
            {
	          breakpoint: 1300,
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 1,
	          }
	        },
	        {
	          breakpoint: 960,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 1,
	          }
	        },
            {
	          breakpoint: 600,
	          settings: {
	          	slidesToShow: 1,
	            slidesToScroll: 1,
	          }
	        }
	     ]     

	});
  
  
  $('.brand-cake-type .custom-cake-part').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1510,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 641,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
  
   $('.most-popular-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1510,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
  
  
  
  
  // tabing to accordian start
	// ----- tabing desktop 
	$('.tab-block').hide();
	var active_item = $('.tab-item.active').attr("rel");
	$("#" + active_item).fadeIn();
	$('.tabing-list .tab-item').on("click", function () {
		$('.tab-block').hide();
		var activetab = $(this).attr("rel");
		$("#" + activetab).fadeIn();
		$('.tabing-list .tab-item').removeClass('active');
		$(this).addClass('active');
		$('.tab-item-inner').removeClass('active');
		$(".tab-item-inner[rel^='" + activetab + "']").addClass("active");
		$(".brand-logo").slick("refresh");
	});
	// ----- accordian mobile
	$('.tab-item-inner').on("click", function () {
		$('.tab-block').stop().slideUp();
		var activetabinner = $(this).attr("rel");
		// $("#" + activetabinner).stop().slideDown();
		$("#" + activetabinner).stop().slideToggle();
		$('.tabing-list .tab-item').removeClass('active');
		$('.tab-item-inner').removeClass('active');
		$(this).addClass('active');
		$(".tabing-list .tab-item[rel^='" + activetabinner + "']").addClass("active");
		$(".brand-logo").slick("refresh");
	});
  
  $(".tabing-list li").click(function() {
        var i = jQuery(this).index(i);
        $(".tab-block .custom-cake-part").eq(i).slick('setPosition', '0');
    });
	// tabing to accordian end


  
  /*featured-slider*/
  $('.featured-slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    dots: false,
	    infinite: true,
	    cssEase: 'linear',
	    arrows: true,
	    responsive: [
	        {
	          breakpoint: 1200,
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 1,
	          }
	        },
	        {
	          breakpoint: 1008,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 1,
	          }
	        },
	        {
	          breakpoint: 800,
	          settings: {
	          	slidesToShow: 2,
	            slidesToScroll: 1,
	          }
	        },
	        {
                breakpoint: 640,
                settings: {
	          	slidesToShow: 1,
	            slidesToScroll: 1,
	          }
            },
	     ]     

	});
        
          
          $('.grid-section').isotope({


          });

  $('.accordian-part .head-click').click(function(){
        $('.accordian-part .head-click').not(this).next().slideUp('fast')
        $('.accordian-part .head-click').not(this).parent('.single-accordian').removeClass('active')
        $(this).next('.content-accordian').stop().slideToggle();
        $(this).parent('.single-accordian').toggleClass('active')
    })
        

          // tabing to accordian end


          // ----- collapsible-content desktop
          jQuery('.collapsible-content').hide();
          var active_item = jQuery('.ctm_accrodion.active').attr("data-tab");
          jQuery("#" + active_item).fadeIn();
          jQuery('.collapsibles-wrapper ul .ctm_accrodion').on("click", function () {
          jQuery('.collapsible-content').hide();
          var activetab = jQuery(this).attr("data-tab");
          jQuery("#" + activetab).fadeIn();
          jQuery('.collapsibles-wrapper ul .ctm_accrodion').removeClass('active');
          jQuery(this).addClass('active');
          jQuery('.ctm_accrodion_inner').removeClass('active');
          jQuery(".ctm_accrodion_inner[data-tab^='" + activetab + "']").addClass("active");
          });

          // ----- accordian mobile
          jQuery('.ctm_accrodion_inner').on("click", function () {
          jQuery('.collapsible-content').stop().slideUp();
          var activetabinner = jQuery(this).attr("data-tab");
          jQuery("#" + activetabinner).stop().slideToggle();
          jQuery('.collapsibles-wrapper ul .ctm_accrodion').removeClass('active');
          jQuery('.ctm_accrodion_inner').removeClass('active');
          jQuery(this).addClass('active');
          jQuery(".collapsibles-wrapper ul .ctm_accrodion[data-tab^='" + activetabinner + "']").addClass("active");
          });
  
} );

/* Script on load
------------------------------------------------------------------------------*/
$( window ).on( 'load',function() {
	// page is fully loaded, including all frames, objects and images

} );

/* Script on scroll
------------------------------------------------------------------------------*/
$( window ).on( 'scroll',function() {

} );

/* Script on resize
------------------------------------------------------------------------------*/
$( window ).on( 'resize',function() {

} );

/* Script all functions
------------------------------------------------------------------------------*/
