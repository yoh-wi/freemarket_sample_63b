$(document).on('turbolinks:load', ()=> {
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
                                <option value="">選択してください</option>
                                ${insertHTML}
                              </select>
                            </div>`;
    $('.form__content__category').append(childSelectHtml);
  }
  //孫カテゴリのセレクトボックス
  function appendGrandchildrenBox(insertHTML){
    var grandchildSelectHtml =  `<div class='category-select-form__added' id= 'grandchildren_wrapper'>
                                  <select class="form__content__category--field" id="grandchild_category" name="product[category_id]">
                                    <option value="">選択してください</option>
                                    ${insertHTML}
                                  </select>
                                 </div>`;
    $('.form__content__category').append(grandchildSelectHtml);
  }
  //サイズのセレクトボックス
  function appendSize(insertHTML){
    var sizeSelectHtml = `<div class='category-select-form__added' id='size_wrapper'>
                            <label class='form__content__category--label'>サイズ</label>
                            <label class='form__content__category--require'>必須</label>
                            <select class='form__content__category--field' id='size' name="product[size_id]">
                              <option value=''>選択してください</option>
                              ${insertHTML}
                            </select>
                          </div>`;
    $('.form__content__category').append(sizeSelectHtml);
  }
  
  //親カテゴリ選択後、子カテゴリをappend
  $('#parent_category').on('change', function(e){
    e.preventDefault();
    var parentCategory = $('#parent_category').val();
    if (parentCategory != ''){
      $.ajax({
        url: '/products/select_child_category',
        type: 'GET',
        data: {parent_category_id : parentCategory},
        dataType: 'json'
      })
      .done(function(children){
        $('#children_wrapper').remove();
        $('#grandchildren_wrapper').remove();
        $('#size_wrapper').remove();
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
    if (childCategory != ''){
      $.ajax({
        url: '/products/select_grandchild_category',
        type: 'GET',
        data: {child_category_id: childCategory},
        dataType: 'json'
      })
      .done(function(grandchildren){
        $('#grandchildren_wrapper').remove();
        $('#size_wrapper').remove();
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
  //孫カテゴリを選択後、サイズをappend
  $('.form__content__category').on('change', '#grandchild_category', function(){
    var grandchildCategory =$('#grandchild_category option:selected').val();
    if (grandchildCategory != ''){
      $.ajax({
        url: '/products/select_size',
        type: 'GET',
        data: {grandchild_category_id: grandchildCategory},
        dataType: 'json'
      })
      .done(function(sizes){
        if (sizes != ''){
          $('#size_wrapper').remove();
          var insertHTML = '';
          sizes.forEach(function(size){
          insertHTML += appendOption(size);
          });
          appendSize(insertHTML);
        }
      })
      .fail(function(){
        alert('サイズの取得に失敗しました');
      })
    }else{
      $('#size_wrapper').remove();
    }
  })
  //配送方法のセレクトボックス
  function appendMethod(insertHTML){
    var methodSelectHtml = `<div class= 'method-select-form__added' id= 'method_wrapper'>
                              <select class= "form__content__method--field" id= "method" name="product[shipping_payer_method_id]">
                                <option value="">選択してください</option>
                                ${insertHTML}
                              </select>
                            </div>`;
    $('.form__content__method').append(methodSelectHtml);
  }
  //支払方法を選択後、配送方法をappend
  $('#payer').on('change', function(){
    var payer = $('#payer').val();
    if (payer != ''){
      $.ajax({
        url: '/products/select_method',
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
                        name="product[images_attributes][${index}][image]"
                        id="product_images_attributes_${index}_image"><br>
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
  lastIndex = $('.js-file_group:last').data('index')-20;
  fileIndex.splice(0, lastIndex);
  //imageプレビュー＋file_field追加
  $('#image_box').on('change', '.js-file_group', function(e){
    const targetIndex = $(this).data('index');
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    if (img = $(`img[data-index="${targetIndex}"]`)[0]){
      img.setAttribute('src', blobUrl);
    }else if (fileIndex.length > 6){
      $('.js-file_group').attr('class','changed-js-file_group');
      $('#previews').append(buildImg(targetIndex, blobUrl));
      $('#previews').append(buildFileField(fileIndex[0]));
      $('.form__content__image__upload').attr('class', 'changed-js-file_group');
      if (fileIndex.length == 7){
        $('.js-file_group').remove();
        $('#previews2').append(buildFileField(fileIndex[0]));
      }
      fileIndex.shift();
      return fileIndex;
    }else{
      $('.js-file_group').attr('class','changed-js-file_group');
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
    const hiddenCheck = $(`input[data-index="${removedIndex}"].hidden-destroy`);
    // もしチェックボックスが存在すればチェックを入れる
    if (hiddenCheck) hiddenCheck.prop('checked', true);

    $(this).parent().remove();
    $('.js-file_group').remove();
    fileIndex.unshift(jsFileIndex);
    if (fileIndex.length == 7){
      const previewImg = $('#previews2').children()[0];
      $(previewImg).remove();
      $('#previews').append(previewImg);
      $('#previews').append(buildFileField(removedIndex));
    }else if (fileIndex.length <= 6){
      const previewImg = $('#previews2').children('.js-preview')[0];
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
    const hiddenCheck = $(`input[data-index="${removedIndex}"].hidden-destroy`);
    // もしチェックボックスが存在すればチェックを入れる
    if (hiddenCheck) hiddenCheck.prop('checked', true);

    $(this).parent().remove();
    $('.js-file_group').remove();
    fileIndex.unshift(jsFileIndex);
    $('#previews2').append(buildFileField(removedIndex));
  });
  //descriptionの文字数カウント
  $('.form__content__description--area').on('keyup', function(){
  var count = $(this).val().length;
  var counter = `${count}/1000` 
  $('#counter').text(counter);
  });
  //price入力後、手数料と利益をだす
  $('.form__content__price--half-field').on('change keyup', function(){
    var price = $(this).val();
    var fee = Math.round(price * 0.1);
    var profit = price - fee
    if (price  >= 300 && price <= 9999999){
      $('.attention').remove();
      $('.form__content__fee--right').text(`¥${fee}`);
      $('.form__content__profit--right').text(`¥${profit}`);
    }else{
      $('.attention').remove();
      $('.form__content__fee--right').text(`ー`);
      $('.form__content__profit--right').text(`ー`);
      $('.form__content__price').append(`<p class="attention">300以上9999999以下で入力してください</p>`)
    }
  })
  // 商品詳細ページの画像切り替え
  $('.detail-small__list--image').on('mouseover', function(){
    $('.detail-box__body__content__list--image').attr({src:$(this).attr('src'),alt:$(this).attr('alt')});
  });
});
