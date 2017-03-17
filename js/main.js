$('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'left',
    anchors:['firstPage', 'secondPage', 'thirdPage','page4'],
    sectionsColor: ['', '', '#f2f2f2', ''],
    responsiveWidth:768,
});
$(window).resize().scroll(function(){
  var prueba = $(this).scrollTop();
  
  if (prueba > 30) {
   $("body").addClass("navegacion");
  }
   else if (prueba < 30) {
   $("body").removeClass("navegacion");
  }
 });
$("#btn-menu").click(function() {
  $('body').toggleClass("sidebar-open").focus();
   $("html, body").scrollTop(0);
});
/*$('a').on('click', function () {
  $(this.hash).toggleClass('active').focus();
});*/
$('#main-wrap').click(function () {
  if ($(this).parent().hasClass("sidebar-open")){
    $(this).parent().removeClass("sidebar-open");
  }
});
$(".close-side").click(function () {
  if ($(this).parent().parent().hasClass("sidebar-open")){
    $(this).parent().parent().removeClass("sidebar-open");
  }
});
$(document).on('click', '#btn-menu', function(){
  $.fn.fullpage.moveTo('firstPage');
});
var windowsize = $(window).width();

$(window).resize(function() {
  var windowsize = $(window).width();
});

if (windowsize < 540) {
  $(".toggle-ul>h2").click(function(e){
  e.preventDefault();
  $('.toggle-ul>ul').stop(false).slideUp();
  $(this).parent().find("ul").stop().slideToggle();
});

}