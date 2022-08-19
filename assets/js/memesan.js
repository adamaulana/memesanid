$(document).ready(function(){
	$(window).on("scroll", function(){
		/* Navbar Scroll */
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= 10) {
			$(".nav-main").css({"background-color": "#52509D", "padding": "10px 90px 12px 90px"});
		}
		else {
			$(".nav-main").css({"padding": "50px 90px 12px 90px", "background": "transparent"});
		}
	});

	/* Navbar click */
	$('.close-bars-default').hide();
	$('.bars-default').on("click", function(){
		$('.menu').css({"margin-left": "0"});
		$('.dark').fadeIn(300);
		$('.bars-default').hide();
		$('.close-bars-default').fadeIn(300);
		$('body').css({"overflow-y": "hidden"});
	})

	$('.close-bars-default').on("click", function(){
		$('.menu').css({"margin-left": "-300px"});
		$('.dark').fadeOut(300);
		$('.bars-default').show();
		$('.close-bars-default').fadeOut(300);
		$('body').css({"overflow-y": "scroll"});
	})

	$('.fitur1').css({"background": "#ffffff", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.25)"});
	$('.men1').css({"background": "#FF6CB3"});
	$('.icon1').hide();
	$('.icon-act1').show();
	$('.icon-act2').hide();
	$('.icon-act3').hide();
	$('.icon-act4').hide();
	$('.fitur1').on("click", function(){
		$('.icon1').hide();
		$('.icon2').show();
		$('.icon3').show();
		$('.icon4').show();
		$('.icon-act1').show();
		$('.icon-act2').hide();
		$('.icon-act3').hide();
		$('.icon-act4').hide();
		$('.fitur1').css({"background": "#ffffff", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.25)"});
		$('.fitur2').css({"background": "#dedede", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.0)"});
		$('.fitur3').css({"background": "#dedede", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.0)"});
		$('.fitur4').css({"background": "#dedede", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.0)"});
		$('.men1').css({"background": "#FF6CB3"});
		$('.men2').css({"background": "#ffffff"});
		$('.men3').css({"background": "#ffffff"});
		$('.men4').css({"background": "#ffffff"});
	})
	$('.fitur2').on("click", function(){
		$('.icon1').show();
		$('.icon2').hide();
		$('.icon3').show();
		$('.icon4').show();
		$('.icon-act1').hide();
		$('.icon-act2').show();
		$('.icon-act3').hide();
		$('.icon-act4').hide();
		$('.fitur1').css({"background": "#dedede", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.0)"});
		$('.fitur2').css({"background": "#ffffff", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.25)"});
		$('.fitur3').css({"background": "#dedede", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.0)"});
		$('.fitur4').css({"background": "#dedede", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.0)"});
		$('.men2').css({"background": "#FF6CB3"});
		$('.men1').css({"background": "#ffffff"});
		$('.men3').css({"background": "#ffffff"});
		$('.men4').css({"background": "#ffffff"});
	})
	$('.fitur3').on("click", function(){
		$('.icon1').show();
		$('.icon2').show();
		$('.icon3').hide();
		$('.icon4').show();
		$('.icon-act1').hide();
		$('.icon-act2').hide();
		$('.icon-act3').show();
		$('.icon-act4').hide();
		$('.fitur1').css({"background": "#dedede", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.0)"});
		$('.fitur2').css({"background": "#dedede", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.0)"});
		$('.fitur3').css({"background": "#ffffff", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.25)"});
		$('.fitur4').css({"background": "#dedede", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.0)"});
		$('.men3').css({"background": "#FF6CB3"});
		$('.men2').css({"background": "#ffffff"});
		$('.men1').css({"background": "#ffffff"});
		$('.men4').css({"background": "#ffffff"});
	})
	$('.fitur4').on("click", function(){
		$('.icon1').show();
		$('.icon2').show();
		$('.icon3').show();
		$('.icon4').hide();
		$('.icon-act1').hide();
		$('.icon-act2').hide();
		$('.icon-act3').hide();
		$('.icon-act4').show();
		$('.fitur1').css({"background": "#dedede", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.0)"});
		$('.fitur2').css({"background": "#dedede", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.0)"});
		$('.fitur3').css({"background": "#dedede", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.0)"});
		$('.fitur4').css({"background": "#ffffff", "box-shadow": "0px 0px 50px rgba(185, 185, 185, 0.25)"});
		$('.men4').css({"background": "#FF6CB3"});
		$('.men2').css({"background": "#ffffff"});
		$('.men3').css({"background": "#ffffff"});
		$('.men1').css({"background": "#ffffff"});
	})
})