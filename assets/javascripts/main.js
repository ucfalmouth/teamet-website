// Write JS here
$(document).ready(function(){
	$('.feedback').on('click', '.feedback__show-form-btn', function(){
		console.log("toggling");
		console.log(this);
		$('.feedback__form').toggle();
	});
});
