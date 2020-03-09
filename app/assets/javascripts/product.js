$(function(){
  //子・孫カテゴリの選択肢
  function appendOption(category){
    var html = `<option value="${category.id}"> ${category.name}</option>`;
    return html;
  }
  //配送方法の選択肢
  function appendMethodOption(method){
    var html = `<option value="${method.id}"> ${method.name}</option>`;
    return html;
  }
  //子カテゴリのセレクトボックス
  function appendChildrenBox(insertHTML){
    var childSelectHtml =  `<div class='category-select-form__added' id= 'children_wrapper'>
                              <select class="form__content__category--field" id="child_category" name="product[category_id]">
                                <option value="選択してください">選択してください</option>
                                ${insertHTML}
                              </select>
                            </div>`;
    $('.form__content__category').append(childSelectHtml);
  }
  //孫カテゴリのセレクトボックス
  function appendGrandchildrenBox(insertHTML){
    var grandchildSelectHtml =  `<div class='category-select-form__added' id= 'grandchildren_wrapper'>
                                  <select class="form__content__category--field" id="grandchild_category" name="product[category_id]">
                                    <option value="選択してください">選択してください</option>
                                    ${insertHTML}
                                  </select>
                                 </div>`;
    $('.form__content__category').append(grandchildSelectHtml);
  }
  //配送方法のセレクトボックス
  function appendMethod(insertHTML){
    var methodSelectHtml = `<div class= 'method-select-form__added' id= 'method_wrapper'>
                              <select class= "form__content__method--field" id= "method" name="product[shipping_payer_method_id]">
                                <option value="選択してください">選択してください</option>
                                ${insertHTML}
                              </select>
                            </div>`;
    $('.form__content__method').append(methodSelectHtml);
  }
  //親カテゴリ選択後、子カテゴリをappend
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
  //子カテゴリを選択後、孫カテゴリをappend
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
  //支払方法を選択後、配送方法をappend
  $('#payer').on('change', function(){
    var payer = $('#payer').val();
    if (payer != ''){
      $.ajax({
        url: 'select_method',
        type: 'GET',
        data: {payer_id: payer},
        dataType: 'json'
      })
      .done(function(methods){
        $('#method_wrapper').remove();
        insertHTML = ''
        methods.forEach(function(method){
          insertHTML += appendMethodOption(method);
        });
        appendMethod(insertHTML);
      })
    }else{
      $('#method_wrapper').remove();
    }
  })

  //挿入するfile_field
  function buildFileField(index){
    var fileHtml = `<label class="js-file_group" data-index="${index}">
                        <i class="fas fa-camera"></i>
                        <input class="js-file" type="file"
                        name="product[images_attributes][${index}][src]"
                        id="product_images_attributes_${index}_src"><br>
                    </label>`;
    return fileHtml;
  }
  //11個目の隠れたjs-file_group
  function buildHiddenFileField(index){
    var fileHtml = `<input type="hidden" class="js-file_group" data-index="${index}">`;
    return fileHtml;
  }
  //挿入するimageのプレビュー
  function buildImg(index, url){
    var imgHtml = `<div class='js-preview' data-index="${index}">
                    <div class='js-img'>
                      <img data-index="${index}" src="${url}" width="120px" height="100px">
                    </div>
                    <div class="js-remove">削除</div>
                   </div>`;
    return imgHtml
  }

  let fileIndex = [1,2,3,4,5,6,7,8,9,10,11];
  //imageプレビュー＋file_field追加
  $('#image_box').on('change', '.js-file_group', function(e){
    const targetIndex = $(this).data('index');
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    if (img = $(`img[data-index="${targetIndex}"]`)[0]){
      img.setAttribute('src', blobUrl);
    }else if (fileIndex.length > 6){
      $('.js-file_group').remove();
      $('#previews').append(buildImg(targetIndex, blobUrl));
      $('#previews').append(buildFileField(fileIndex[0]));
      $('.form__content__image__upload').remove();
      fileIndex.shift();
      if (fileIndex.length <= 6){
        $('.js-file_group').remove();
        $('#previews2').append(buildFileField(fileIndex[0] - 1));
      }
      return fileIndex;
    }else{
      $('.js-file_group').remove();
      $('#previews2').append(buildImg(targetIndex, blobUrl));
      $('#previews2').append(buildFileField(fileIndex[0]));
      fileIndex.shift();
      if (fileIndex.length == 1){
        $('.js-file_group').remove();
        $('#previews2').append(buildHiddenFileField(fileIndex[0] - 1));
      }
      return fileIndex;
    }
  })
  //image削除ボタン
  $('#previews').on('click', '.js-remove', function(){
    const removedIndex = $(this).parent().data('index');
    const jsFileIndex = $('.js-file_group').data('index');
    $(this).parent().remove();
    $('.js-file_group').remove();
    fileIndex.unshift(jsFileIndex);
    if (fileIndex.length == 7){
      const previewImg = $('#previews2').children()[0];
      $(previewImg).remove();
      $('#previews').append(previewImg);
      $('#previews').append(buildFileField(removedIndex));
    }else if (fileIndex.length <= 6){
      const previewImg = $('#previews2').children()[0];
      $(previewImg).remove();
      $('#previews').append(previewImg);
      $('#previews2').append(buildFileField(removedIndex));
    }else{
      $('#previews').append(buildFileField(removedIndex));
    }
  });
  $('#previews2').on('click', '.js-remove', function(){
    const removedIndex = $(this).parent().data('index');
    const jsFileIndex = $('.js-file_group').data('index');
    $(this).parent().remove();
    $('.js-file_group').remove();
    fileIndex.unshift(jsFileIndex);
    $('#previews2').append(buildFileField(removedIndex));
  });
})