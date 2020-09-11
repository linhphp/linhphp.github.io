$(function(){

	vitriedu = $('#khoi_edu').offset().top;
	// console.log(vitriedu);
	$('.nutxuong,.kn').click(function(){
		$('body,html').animate({scrollTop:vitriedu},600);
		// console.log('click duoc chua');
		return false;
	});
	sp = $('#sp').offset().top;
	$('.sp').click(function(){
		$('body,html').animate({scrollTop:sp},600);
		// console.log('click duoc chua');
		return false;
	});
	$('.about').click(function(){
		$('body,html').animate({scrollTop:0},800);
		// console.log('click duoc chua');
		return false;
	});
	
	
});
 