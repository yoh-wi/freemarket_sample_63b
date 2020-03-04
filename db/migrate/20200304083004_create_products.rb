class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.integer :category_id
      t.string :brand
      t.enum :product_condition
      t.integer :shipping_payer_method_id
      t.integer :prefecture_id
      t.enum :days_of_shipping
      t.integer :price
      t.references :seller_id
      t.references :buyer_id
      t.enum :trade_status
      t.timestamps
    end
  end
end
