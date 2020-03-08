class ShippingPayerMethod < ApplicationRecord
  has_many :products
  has_ancestry
end
