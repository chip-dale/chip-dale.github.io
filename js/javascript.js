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
 });/* фиксированное меню вверху страницы при прокрутке */

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
		animationTime: 1200,				// How long the slide transition takes
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
