$(document).ready(function(){
  bindScrollOnMoon('#moon_image', 'right', 'bottom')
})


var bindScrollOnMoon = function(object, horizontalDirection, verticalDirection) {
  var lastScrollTop = 0;
  $(window).scroll(function(event){
    var currentTop = $(this).scrollTop();
    horizontalPosition = $(object).css(horizontalDirection).replace('px','')
    verticalPosition = $(object).css(verticalDirection).replace('px','')
    horizontalMovement = 2
    verticalMovement = 1
    if (currentTop > lastScrollTop){
      $(object).css(horizontalDirection, parseInt(horizontalPosition) + horizontalMovement + 'px')
      // $(object).css(verticalDirection, parseInt(verticalPosition) + verticalMovement + 'px')
    } else {
      $(object).css(horizontalDirection, parseInt(horizontalPosition) - horizontalMovement + 'px')
      // $(object).css(verticalDirection, parseInt(verticalPosition) - verticalMovement + 'px')
    }
    lastScrollTop = currentTop;
  });
}