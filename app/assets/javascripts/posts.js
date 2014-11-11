$(document).ready(function(){
  bindPostHoverEvents()
})

var bindPostHoverEvents = function() {
  $('.post').hover(function(){
    post = $(this)
    $(this).children('.more').fadeOut( function() {
      post.children('.hidden_info').slideDown()
    })
  }, function(){
    $(this).children('.hidden_info').slideUp( function() {
      post.children('.more').fadeIn()
    })
  })
}