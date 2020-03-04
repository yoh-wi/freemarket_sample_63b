$(function(){
  function appendOption(category){
    var html = `<option value="${category.id}"> ${category.name}</option>`;
    return html;
  }

  function appendChildrenBox(insertHTML){
    var childSelectHtml =  `<div class='listing-select-wrapper__added' id= 'children_wrapper'>
                              <select class="form__content__category--field" id="child_category" name="category_id">
                                <option value="選択してください">選択してください</option>
                                ${insertHTML}
                              </select>
                            </div>`;
    $('.form__content__category').append(childSelectHtml);
  }
  $('#parent_category').on('change', function(e){
    e.preventDefault();
    var parentCategory = $('#parent_category').val();
    $.ajax({
      url: 'select_child_category',
      type: 'GET',
      data: {parent_category_id : parentCategory},
      dataType: 'json'
    })
    .done(function(children){
      $('#children_wrapper').remove();
      var insertHTML = '';
      children.forEach(function(child){
        insertHTML += appendOption(child);
      });
      appendChildrenBox(insertHTML);
    })
  })
})