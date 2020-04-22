$(function(){
  $('.address-form__contents--btn').on('click', function(e) {
    e.preventDefault();
    //挿入するエラーメッセージ
    var inputErrorHtml = `<div class='error_message'>入力してください</div>`;
    var selectErrorHtml = `<div class='error_message'>選択してください</div>`;
    var numberFormatErrorHtml = `<div class='error_message'>半角数字で入力してください</div>`;
    var kanaFormatErrorHtml = `<div class='error_message'>全角カタカナ以外は使用できません</div>`;
    //各入力内容を取得
    var last_name = $('#last_name').val();
    var first_name = $('#first_name').val();
    var last_name_kana = $('#last_name_kana').val();
    var first_name_kana = $('#first_name_kana').val();
    var postal_code = $('#postal_code').val();
    var prefecture = $('#prefecture').val();
    var municipality = $('#municipality').val();
    var house_number = $('#house_number').val();
    var tel = $('#tel').val();
    //バリデーション判定用変数
    let judge = 0
    if (last_name.length == 0) {
      $('.last_name > .error_message').remove();
      $('.last_name').append(inputErrorHtml);
      judge += 1
    }
    if (first_name.length == 0) {
      $('.first_name > .error_message').remove();
      $('.first_name').append(inputErrorHtml);
      judge += 1
    }
    if (last_name_kana.length == 0) {
      $('.last_name_kana > .error_message').remove();
      $('.last_name_kana').append(inputErrorHtml);
      judge += 1
    } else if (!last_name_kana.match(/\A[ァ-ヶー－]+\z/)) {
      $('.last_name_kana > .error_message').remove();
      $('.last_name_kana').append(kanaFormatErrorHtml);
      judge += 1
    }
    if (first_name_kana.length == 0) {
      $('.first_name_kana > .error_message').remove();
      $('.first_name_kana').append(inputErrorHtml);
      judge += 1
    } else if (!first_name_kana.match(/\A[ァ-ヶー－]+\z/)) {
      $('.first_name_kana > .error_message').remove();
      $('.first_name_kana').append(kanaFormatErrorHtml);
      judge += 1
    }
    if (postal_code.length == 0) {
      $('.postal_code > .error_message').remove();
      $('.postal_code').append(inputErrorHtml);
      judge += 1
    } else if (!postal_code.match(/^[0-9]+$/)) {
      $('.postal_code > .error_message').remove();
      $('.postal_code').append(numberFormatErrorHtml);
      judge += 1
    }
    if (prefecture === undefined) {
      $('.prefecture > .error_message').remove();
      $('.prefecture').append(selectErrorHtml);
      judge += 1
    }
    if (municipality.length == 0) {
      $('.municipality > .error_message').remove();
      $('.municipality').append(inputErrorHtml);
      judge += 1
    }
    if (house_number.length == 0) {
      $('.house_number > .error_message').remove();
      $('.house_number').append(inputErrorHtml);
      judge += 1
    }
    if (!tel.match(/^[0-9]+$/)) {
      $('.tel > .error_message').remove();
      $('.tel').append(numberFormatErrorHtml);
      judge += 1
    }
  })
})