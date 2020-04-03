$(document).on('turbolinks:load', ()=> {
  $('#modal-open-btn').on('click', function(){
    $('#overlay').fadeIn();
    document.getElementById('modal-close-btn').onclick = function () {
      $('#overlay').fadeOut();
    };
    document.getElementById("delete-comformation-btn").onclick = function () {
      document.getElementById("item-delete-btn").click();
    };
  })
});