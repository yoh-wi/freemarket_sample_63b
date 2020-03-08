payer_seller = ShippingPayerMethod.create(payer_or_method: "送料込み（出品者負担）")
payer_seller.children.create([{payer_or_method: "未定"},{payer_or_method: "らくらくメルカリ便"},{payer_or_method: "ゆうメール"},{payer_or_method: "レターパック"},{payer_or_method: "普通郵便（定形/定形外）"},{payer_or_method: "クロネコヤマト"},{payer_or_method: "ゆうパック"},{payer_or_method: "クリックポスト"},{payer_or_method: "ゆうパケット"}])
payer_buyer = ShippingPayerMethod.create(payer_or_method: "着払い（購入者負担）")
payer_buyer.children.create([{payer_or_method: "未定"},{payer_or_method: "クロネコヤマト"},{payer_or_method: "ゆうパック"},{payer_or_method: "ゆうメール"}])