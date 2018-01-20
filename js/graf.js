	/*skills graf*/
	$(function() {
		  $('.chart').easyPieChart({
			scaleColor: "#ecf0f1",
			lineWidth: 20,
			lineCap: 'butt',
			barColor: 'rgb(250,80,80)',
			trackColor:	"#ecf0f1",
			size: 150,
			animate: 500
		  });
		});


	/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
	//need to rewrite in prototype
	//no jquery

	$(function() {
	  var $blocks = $('.animBlock.notViewed');
	  var $window = $(window);

	  $window.on('scroll', function(e){
		$blocks.each(function(i,elem){
		  if($(this).hasClass('viewed'))
			return;

		  isScrolledIntoView($(this));
		});
	  });
	});

	function isScrolledIntoView(elem) {
	  var docViewTop = $(window).scrollTop();
	  var docViewBottom = docViewTop + $(window).height();
	  var elemOffset = 0;

	  if(elem.data('offset') != undefined) {
		elemOffset = elem.data('offset');
	  }
	  var elemTop = $(elem).offset().top;
	  var elemBottom = elemTop + $(elem).height();

	  if(elemOffset != 0) { // custom offset is updated based on scrolling direction
		if(docViewTop - elemTop >= 0) {
		  // scrolling up from bottom
		  elemTop = $(elem).offset().top + elemOffset;
		} else {
		  // scrolling down from top
		  elemBottom = elemTop + $(elem).height() - elemOffset
		}
	  }

	  if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
		// once an element is visible exchange the classes
		$(elem).removeClass('notViewed').addClass('viewed');

		var animElemsLeft = $('.animBlock.notViewed').length;
		if(animElemsLeft == 0){
		  // with no animated elements left debind the scroll event
		  $(window).off('scroll');
		}
	  }
	}

	/*smooth scrolling - links*/
	$(document).ready(function(){
	  // Add smooth scrolling to all links
	  $("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
	  });
	});




	$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href");if($(window).scrollTop()!="0"){$(this).fadeIn("slow")}var scrollDiv=$(this);$(window).scroll(function(){if($(window).scrollTop()=="0"){$(scrollDiv).fadeOut("slow")}else{$(scrollDiv).fadeIn("slow")}});$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}});

		$(function(){
			$("#toTop").scrollToTop();
		});
