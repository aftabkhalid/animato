// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

$(".demo-effect").live('click', function () {
	var clicked_dom= this;
	if( $(this).attr("class").indexOf("duration-1s") != -1 )
	$(this).removeClass("duration-1s");
	   setTimeout(function() {
			$(clicked_dom).addClass("duration-1s");
		},50
	);
});