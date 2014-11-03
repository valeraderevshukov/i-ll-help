head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	$(document).click(function() {
		$(".js-dropdown").removeClass("is-active");
	});
	$(".js-dropdown").on("click", function(){
		$(this).toggleClass("is-active");
	});
	$("body").on("click", ".js-dropdown", function(event){
		event.stopPropagation();
	});

});