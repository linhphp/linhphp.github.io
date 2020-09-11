$(function(){

	vitriedu = $('#khoi_edu').offset().top;
	// console.log(vitriedu);
	$('.nutxuong,.kn').click(function(){
		$('body,html').animate({scrollTop:vitriedu},600);
		return false;
	});
	$('.sp').click(function(){
		$('body,html').animate({scrollTop:$('#sp').offset().top},600);
		return false;
	});
	$('.about').click(function(){
		$('body,html').animate({scrollTop:0},800);
		return false;
	});
	$('.cmt').click(function(){
		$('body,html').animate({scrollTop:$('#comment').offset().top},600);
	});
	$('.lh').click(function(){
		$('body,html').animate({scrollTop:$('#lienhe').offset().top},600);
	});
	
});
 