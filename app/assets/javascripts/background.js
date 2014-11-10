$(document).ready(function(){
  bindScrollOnMoon('#moon_image', 'right', 'bottom')
})


var bindScrollOnMoon = function(object, horizontalDirection, verticalDirection) {
  var lastScrollTop = 0;
  $(window).scroll(function(event){
    var currentTop = $(this).scrollTop();
    position = $(object).css(horizontalDirection).replace('px','')
    horizontalMovement = 3
    verticalMovement = 1
    if (currentTop > lastScrollTop){
      $(object).css(horizontalDirection, parseInt(position) + horizontalMovement + 'px')
      $(object).css(verticalDirection, parseInt(position) + verticalMovement + 'px')
    } else {
      $(object).css(horizontalDirection, parseInt(position) - horizontalMovement + 'px')
      $(object).css(verticalDirection, parseInt(position) - verticalMovement + 'px')
    }
    lastScrollTop = currentTop;
  });
}