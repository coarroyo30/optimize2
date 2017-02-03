$(document).ready(function(){
	// Variables
	var $imageThumb = $(".image a img");

	// On image thumb click, replace thumb with larger image

	//   Get large src string
	$imageThumb.on("click", function(){
		var $thumbSrc = $(this).attr("src");
		var largerSrc = $thumbSrc.replace("build/img/photos/thumbs/", "build/img/photos/");
		var $dataInfo = $(this).parent().attr("data-reveal-id"); 
		$("#" + $dataInfo).find("img").attr("src", largerSrc); 
	});
});