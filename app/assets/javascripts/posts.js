$(document).ready(function(){
  bindPostHoverEvents()
  bindBannerShowEvent()
})

var bindPostHoverEvents = function() {
  $('.more').hover(function(){
    moreLink = $(this)
    moreLink.slideUp( function() {
      moreLink.siblings('.hidden_info').slideDown()
      moreLink.siblings('.less').slideDown()
    })
  })

  $('.less').hover(function() {
    lessLink = $(this)
    lessLink.slideUp(function(){
      lessLink.siblings('.hidden_info').slideUp()
      lessLink.siblings('.more').slideDown()
    })
  })
}

var bindBannerShowEvent = function() {
  $(window).scroll(function(event){
    var currentTop = $(this).scrollTop();
    if (currentTop > 350) {
      $('#personal_info_banner').css('top', '0px')
    } else {
      $('#personal_info_banner').css('top', '-86px')
    }
  });
}
