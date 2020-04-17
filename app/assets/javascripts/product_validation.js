$(function(){
  $('#product-form').validate({
    rules: {
      "product[name]": {
        required: true
      },
      "product[description]": {
        required: true,
        maxlength: 1000
      },
      "product[category_id]": {
        required: true
      },
      "product[product_condition]": {
        required: true
      },
      "product[shipping_payer_method_id]": {
        required: true
      },
      "product[prefecture_id]": {
        required: true
      },
      "product[days_of_shipping]": {
        required: true
      },
      "product[price]": {
        required: true,
        range: [300, 9999999]
      }
    },
    messages: {
      "product[name]": {
        required: "入力してください"
      },
      "product[description]": {
        required: "入力してください",
        maxlength: "1000文字以下で入力してください"
      },
      "product[category_id]": {
        required: "選択してください"
      },
      "product[product_condition]": {
        required: "選択してください"
      },
      "product[shipping_payer_method_id]": {
        required: "選択してください"
      },
      "product[prefecture_id]": {
        required: "選択してください"
      },
      "product[days_of_shipping]": {
        required: "選択してください"
      },
      "product[price]": {
        required: "入力してください",
        range: "300円以上9999999円以下で入力して下さい"
      }
    },
    errorPlacement: function(error, element){
        error.insertAfter(element);
    }
  });
})