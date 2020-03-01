class Product < ApplicationRecord
  has_many :images
  belongs_to :category
  belongs_to :shipping_payer_method
  belongs_to :seller, class_name: 'User'
  belongs_to :buyer, class_name: 'User'

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :prefecture
end
