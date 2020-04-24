var h_hght = 200;	// высота шапки
var h_mrg = 0;		// отступ когда шапка уже не видна
		/* фиксированное меню вверху страницы при прокрутке */
$(function(){
	var elem = $('#nav');
	var top = $(this).scrollTop();
	
	if(top > h_hght){
		elem.css('top', h_mrg);
	}
	
	$(window).scroll(function(){
		top = $(this).scrollTop();
		
		if (top+h_mrg < h_hght) {
			elem.css('top', (h_hght-top));
		} else {
			elem.css('top', h_mrg);
		}
	});
});
try{ // Активная ссылка открытой страницы
var el=document.querySelectorAll('#nav ul li a');
var url=document.location.href;
for(var i=0;i<el.length; i++){
if (url==el[i].href){
el[i].className += 'active';
};
};
}catch(e){}


		/* слайдер на главной странице */
function formatText(index, panel) {
	return index + "";
}
$(function () {
	$('.anythingSlider').anythingSlider({
		easing: "easeInOutExpo",		// Anything other than "linear" or "swing" requires the easing plugin
		autoPlay: true,					// This turns off the entire FUNCTIONALY, not just if it starts running or not.
		delay: 3600,					// How long between slide transitions in AutoPlay mode
		startStopped: false,			// If autoPlay is on, this can force it to start stopped
		animationTime: 1200,			// How long the slide transition takes
		hashTags: true,					// Should links change the hashtag in the URL?
		buildNavigation: false,			// If true, builds and list of anchor links to link to each slide
		pauseOnHover: true,				// If true, and autoPlay is enabled, the show will pause on hover
		//startText: "&#916;",			// Start text
		//stopText: "&#935;",			// Stop text
		navigationFormatter: formatText	// Details at the top of the file on this use (advanced use)
	});
	$("#slide-jump").click(function(){
		$('.anythingSlider').anythingSlider();
	});
});/* слайдер на главной странице */

		// Tabs
$(".tab_item").not(":first").hide();
$(".wrapperGallery .tab").click(function() {
	$(".wrapperGallery .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

		// Gallery
lightbox.option({
  albumLabel: 'Image %1 of %2',
  alwaysShowNavOnTouchDevices: false,
  fadeDuration: 600,
  fitImagesInViewport: true,
  imageFadeDuration: 600,
  maxWidth: 800,
  maxHeight: 600,
  positionFromTop: 50,
  resizeDuration: 700,
  showImageNumberLabel: true,
  wrapAround: false, // If true, when a user reaches the last image in a set, the right navigation arrow will appear and they will be to continue moving forward which will take them back to the first image in the set.
  /*
  Sanitize Title
  If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
  This will free you to add html tags, such as links, in the caption.
  If the caption data is user submitted or from some other untrusted source, then set this to true
  to prevent xss and other injection attacks.
   */
  sanitizeTitle: false
})