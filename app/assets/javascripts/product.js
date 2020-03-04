$(function(){
  function appendOption(category){
    var html = `<option value="${category.id}"> ${category.name}</option>`;
    return html;
  }

  function appendMethodOption(method){
    var html = `<option value="${method.id}"> ${method.payer_or_method}</option>`;
    return html;
  }

  function appendChildrenBox(insertHTML){
    var childSelectHtml =  `<div class='category-select-form__added' id= 'children_wrapper'>
                              <select class="form__content__category--field" id="child_category" name="category_id">
                                <option value="選択してください">選択してください</option>
                                ${insertHTML}
                              </select>
                            </div>`;
    $('.form__content__category').append(childSelectHtml);
  }
  function appendGrandchildrenBox(insertHTML){
    var grandchildSelectHtml =  `<div class='category-select-form__added' id= 'grandchildren_wrapper'>
                              <select class="form__content__category--field" id="grandchild_category" name="category_id">
                                <option value="選択してください">選択してください</option>
                                ${insertHTML}
                              </select>
                            </div>`;
    $('.form__content__category').append(grandchildSelectHtml);
  }

  $('#parent_category').on('change', function(e){
    e.preventDefault();
    var parentCategory = $('#parent_category').val();
    if (parentCategory != ''){
      $.ajax({
        url: 'select_child_category',
        type: 'GET',
        data: {parent_category_id : parentCategory},
        dataType: 'json'
      })
      .done(function(children){
        $('#children_wrapper').remove();
        $('#grandchildren_wrapper').remove();
        var insertHTML = '';
        children.forEach(function(child){
          insertHTML += appendOption(child);
        });
        appendChildrenBox(insertHTML);
      })
      .fail(function(){
        alert('カテゴリの取得に失敗しました');
      })
    }else{
      $('#children_wrapper').remove();
      $('#grandchildren_wrapper').remove();
    }
  })

  $('.form__content__category').on('change', '#child_category', function(){
    var childCategory = $('#child_category option:selected').val();
    if (childCategory != '選択してください'){
      $.ajax({
        url: 'select_grandchild_category',
        type: 'GET',
        data: {child_category_id: childCategory},
        dataType: 'json'
      })
      .done(function(grandchildren){
        $('#grandchildren_wrapper').remove();
        var insertHTML = '';
        grandchildren.forEach(function(grandchild){
          insertHTML += appendOption(grandchild);
        });
        appendGrandchildrenBox(insertHTML);
      })
      .fail(function(){
        alert('カテゴリの取得に失敗しました');
      })
    }else{
      $('#grandchildren_wrapper').remove();
    }
  })
  $('#payer').on('change', function(){
    var payer = $('#payer').val();
    console.log(payer);
  })
})