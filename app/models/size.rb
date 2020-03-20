class Size < ApplicationRecord
  has_many :products
  has_many :size_categories
  has_many :categories, through: :size_categories
end
