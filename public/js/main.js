$(document).ready(function(){

	//Script to adjust menusize when scrolling.
	$(window).scroll(function() {
  		if ($(document).scrollTop() > 600) {
    		$('#sidemenu').addClass('slideIn');
  		} else {
    		$('#sidemenu').removeClass('slideIn');
  		}
	});
});
