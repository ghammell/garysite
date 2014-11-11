$(document).ready(function(){
  bindPostHoverEvents()
  bindBannerShowEvent()
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

var bindBannerShowEvent = function() {
  var lastScrollTop = 0;
  $(window).scroll(function(event){
    var currentTop = $(this).scrollTop();
    if (currentTop > 200) {
      $('#personal_info_banner').css('top', '0px')
    } else {
      $('#personal_info_banner').css('top', '-82px')
    }
  });
}
