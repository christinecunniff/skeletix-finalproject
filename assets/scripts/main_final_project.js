$(document).ready(function() {


//MAKE A DONATE BUTTON ON about.html
$( "#donate" ).click(function() {
  alert( "Thank you for donating to Skeletix <3" );
  console.log("cha-CHING $$$");
});

//fade in nav on homepage
$(".main-nav").hide();
	$(".main-nav").fadeIn(1000);




//figure out the crossfade after class
	// $(function(){
	//     $('.imgcross img:gt(0)').hide();
	//     setInterval(function(){
	//       $('.imgcross :first-child').fadeOut()
	//          .next('img').fadeIn()
	//          .end().appendTo('.imgcross');}, 
	//       3000);
	// });


});