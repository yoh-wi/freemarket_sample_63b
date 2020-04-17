$(function(){
  $('.form__content__btn--submit').on('click', function() {
    //挿入するエラーメッセージ
    var inputErrorHtml = `<div class='error_message'>入力してください</div>`;
    var selectErrorHtml = `<div class='error_message'>選択してください</div>`;
    var descriptionErrorHtml = `<div class='error_message'>1000文字以下で入力してください</div>`;
    var imageErrorHtml = `<div class='error_message'>画像がありません</div>`;
    var priceErrorHtml = `<div class='attention'>300以上9999999以下で入力してください</div>`;
    console.log("OK");
    //各入力内容を取得
    var image = $('.js-preview').val();
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
    if (image = 'undefined') {
      $('.form__content__image > .error_message').remove();
      $('.form__content__image').append(imageErrorHtml);
      judge += 1
    }
    if (grandchildCategory = 'undefined' || grandchildCategory == 0) {
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
    if (size == 0) {
      $('#size_wrapper > .error_message').remove();
      $('#size_wrapper').append(selectErrorHtml);
      judge =+ 1
    }
    if (condition == '') {
      $('.form__content__condition > .error_message').remove();
      $('.form__content__condition').append(selectErrorHtml);
      judge += 1
    }
    if (method = 'undefined' || method == 0) {
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
    console.log(price);
    if (price == '' || price < 300 || price > 9999999) {
      $('.attention').remove();
      $('.form__content__price').append(priceErrorHtml);
    }
  })
})