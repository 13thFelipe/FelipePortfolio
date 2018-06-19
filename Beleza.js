/* SlideUp / SlideDown*/
$( ".trabalhos" ).on( "click",function(){
	$('html, body').animate({
         scrollTop: $("#works").offset().top
     }, 500);
});
$( ".home" ).on( "click",function(){
	$('html, body').animate({
         scrollTop: $("#sobre").offset().top
     }, 500);
});
$( ".contato" ).on( "click",function(){
	$('html, body').animate({
         scrollTop: $("#contato").offset().top
     }, 500);
});


/* popup do ok - alert*/
$("#envia").on("click", function(){
	alert("Essa função esta indisponível no momento :/");
});


/* focus no titulo */

/*Trabalhos*/
$( ".trabalhos" ).focus(function() {
  $(".trabalhos").css({"color":"#F2EFDF"});
  $(".home").css({"color":"#9BBFAB"});
  $(".contato").css({"color":"#9BBFAB"});
});
/*Home*/
$( ".home" ).focus(function() {
  $(".trabalhos").css({"color":"#9BBFAB"});
  $(".home").css({"color":"#F2EFDF"});
  $(".contato").css({"color":"#9BBFAB"});
});
/*Contato*/
$( ".contato" ).focus(function() {
  $(".trabalhos").css({"color":"#9BBFAB"});
  $(".home").css({"color":"#9BBFAB"});
  $(".contato").css({"color":"#F2EFDF"});
});