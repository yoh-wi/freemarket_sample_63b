$(function(){
  $('.form__content__btn--submit').on('click', function(e) {
    e.preventDefault();
    //挿入するエラーメッセージ
    var inputErrorHtml = `<div class='error_message'>入力してください</div>`;
    var selectErrorHtml = `<div class='error_message'>選択してください</div>`;
    var descriptionErrorHtml = `<div class='error_message'>1000文字以下で入力してください</div>`;
    var imageErrorHtml = `<div class='error_message'>画像がありません</div>`;
    var priceErrorHtml = `<div class='attention'>300以上9999999以下で入力してください</div>`;
    //各入力内容を取得
    var image = $('.js-preview').size();
    var name = $('.form__content__name--field').val();
    var description = $('.form__content__description--area').val();
    var grandchildCategory = $('#grandchild_category').val();
    var size = $('#size').val();
    var condition = $('.form__content__condition--field').val();
    var method = $('#method').val();
    var area = $('.form__content__area--field').val();
    var days = $('.form__content__days--field').val();
    var price = $('.form__content__price--half-field').val();
    //バリデーション判定用変数
    let judge = 0
    //バリデーションチェック
    if (image === 0) {
      $('.form__content__image > .error_message').remove();
      $('.form__content__image').append(imageErrorHtml);
      judge += 1
    }
    if (grandchildCategory === undefined || grandchildCategory == 0) {
      $('.form__content__category > .error_message').remove();
      $('.form__content__category').append(selectErrorHtml);
      judge += 1
    }
    if (name.length == 0) {
      $('.form__content__name > .error_message').remove();
      $('.form__content__name').append(inputErrorHtml);
      judge += 1
    }
    if (description.length == 0) {
      $('.form__content__description > .error_message').remove();
      $('.form__content__description').append(inputErrorHtml);
      judge += 1
    } else if (description.length > 1000) {
      $('.form__content__description > .error_message').remove();
      $('.form__content__description').append(descriptionErrorHtml);
      judge += 1
    }
    if (size == '') {
      $('#size_wrapper > .error_message').remove();
      $('#size_wrapper').append(selectErrorHtml);
      judge =+ 1
    }
    if (condition == '') {
      $('.form__content__condition > .error_message').remove();
      $('.form__content__condition').append(selectErrorHtml);
      judge += 1
    }
    if (method === undefined) {
      $('.form__content__method > .error_message').remove();
      $('.form__content__method').append(selectErrorHtml);
      judge += 1
    } else if (method == '') {
      $('.form__content__method > .error_message').remove();
      $('.form__content__method').append(selectErrorHtml);
      judge += 1
    }
    if (area == '') {
      $('.form__content__area > .error_message').remove();
      $('.form__content__area').append(selectErrorHtml);
      judge += 1
    }
    if (days == '') {
      $('.form__content__days > .error_message').remove();
      $('.form__content__days').append(selectErrorHtml);
      judge += 1
    }
    if (price == '' || price < 300 || price > 9999999) {
      $('.attention').remove();
      $('.form__content__price').append(priceErrorHtml);
      judge += 1
    }
    //バリデーション通過できたらsubmitする
    if (judge == 0) {
      $('#sell_form').submit();
    } else {
      var position = $('.error_message').parent().get(0).offsetTop
      $('html,body').animate({ scrollTop: position });
    }
  })
  //バリデーションエラーが解消されたらエラーメッセージは消す
  $('.form__content__image__upload--file').on('change', function(){
    $('.form__content__image > .error_message').remove();
  })
  $('.form__content__name--field').on('keyup', function(){
    if ($(this).val().length != 0) {
      $('.form__content__name > .error_message').remove();
    }
  })
  $('.form__content__category').on('change', '#size',function(){
    $('#size_wrapper > .error_message').remove();
  })
  $('#parent_category').on('change', function(){
    $('.form__content__category > .error_message').remove();
  })
  $('.form__content__category').on('change', '#child_category', function(){
    $('.form__content__category > .error_message').remove();
  })
  $('.form__content__category').on('change', '#grandchild_category', function(){
    $('.form__content__category > .error_message').remove();
  })
  $('.form__content__condition--field').on('change', function(){
    $('.form__content__condition > .error_message').remove();
  })
  $('#payer').on('change', function(){
    $('.form__content__method > .error_message').remove();
  })
  $('.form__content__method').on('change', '#method', function(){
    $('.form__content__method > .error_message').remove();
  })
  $('.form__content__area--field').on('change', function(){
    $('.form__content__area > .error_message').remove();
  })
  $('.form__content__days--field').on('change', function(){
    $('.form__content__days > .error_message').remove();
  })
})