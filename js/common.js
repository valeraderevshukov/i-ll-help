head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	$(document).on("click", function() {
		$(".js-dropdown").removeClass("is-active");
		$("body").removeClass("is-open-popup");
	});
	$(".js-dropdown").on("click", function(){
		$(this).toggleClass("is-active");
	});
	$("body").on("click", ".js-dropdown, .js-header-popap, .js-popap-wrap", function(event){
		event.stopPropagation();
	});
});