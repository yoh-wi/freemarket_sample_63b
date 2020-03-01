class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string        :name,                      null: false
      t.string        :description,               null: false
      t.integer       :category_id,               null: false, foreign_key: true
      t.string        :brand
      t.integer       :product_condition,         null: false
      t.integer       :shipping_payer_method_id,  null: false, foreign_key: true
      t.integer       :prefecture_id,             null: false, foreign_key: true
      t.integer       :days_of_shipping,          null: false
      t.integer       :price,                     null: false
      t.integer       :seller_id,                 null: false, foreign_key: {to_table: :users}
      t.integer       :buyer_id,                  null: false, foreign_key: {to_table: :users}
      t.integer       :trade_status,              null: false, default: 0
      t.timestamps
    end
  end
end
