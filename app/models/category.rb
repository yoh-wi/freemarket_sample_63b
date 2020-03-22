class Category < ApplicationRecord
  has_many :products
  has_ancestry
  has_many :size_categories
  has_many :sizes, through: :size_categories
end
