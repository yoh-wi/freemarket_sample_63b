$(function(){
  $('#parent_category').on('change', function(e){
    e.preventDefault();
    var parentCategory = $('#parent_category').val();
    console.log(parentCategory);
  })
})