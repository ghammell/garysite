$(document).ready(function(){
  window.onbeforeunload = function(){
    window.scrollTo(0,0);
  }
  bindScrollOnMoon('#moon_image', 'right')
})


var bindScrollOnMoon = function(object, horizontalDirection) {
  var lastScrollTop = 0;
  $(window).scroll(function(event){
    var currentTop = $(this).scrollTop();
    horizontalPosition = $(object).css(horizontalDirection).replace('px','')
    horizontalMovement = 1
    if (currentTop > lastScrollTop){
      $(object).css(horizontalDirection, parseInt(horizontalPosition) + horizontalMovement + 'px')
    } else {
      $(object).css(horizontalDirection, parseInt(horizontalPosition) - horizontalMovement + 'px')
    }
    lastScrollTop = currentTop;
  });
}