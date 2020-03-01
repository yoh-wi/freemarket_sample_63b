class CreateShippingPayerMethods < ActiveRecord::Migration[5.2]
  def change
    create_table :shipping_payer_methods do |t|
      t.string :payer_or_method, null: false
      t.timestamps
    end
  end
end
