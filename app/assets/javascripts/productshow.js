$(function(){
  $('.detail-small__list--image').on('mouseover', function(){
    $('.detail-box__body__content__list--image').attr({src:$(this).attr('src'),alt:$(this).attr('alt')});
  });
 });