class AddAncestryToShippingPayerMethod < ActiveRecord::Migration[5.2]
  def change
    add_column :shipping_payer_methods, :ancestry, :string
    add_index :shipping_payer_methods, :ancestry
  end
end
