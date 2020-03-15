class Product < ApplicationRecord

  enum product_condition: [:brand_new, :almost_new, :good, :little_dirty, :dirty, :too_dirty]
  enum days_of_shipping: [:days1_2, :days2_3, :days4_7]
  enum trade_status: [:for_sale, :trading, :sold]

  has_many :images, inverse_of: :product
  accepts_nested_attributes_for :images, allow_destroy: true
  belongs_to :category
  belongs_to :size
  belongs_to :shipping_payer_method
  belongs_to :seller, class_name: 'User'
  belongs_to :buyer, class_name: 'User', optional: true

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :prefecture

  #バリデーション
  parents = []
  Category.all.each do |p|
    if p.children?
      parents << p.id
    end
  end
  payers = []
  ShippingPayerMethod.all.each do |p|
    if p.children?
      payers << p.id
    end
  end

  validates :images, length: { minimum: 1, maximum: 10 }
  validates :name, :description, :category_id, :product_condition, :shipping_payer_method_id, :prefecture_id, :days_of_shipping, :price, :seller_id, presence: true
  validates :size_id, presence: true, if: Proc.new { |p| p.category.sizes.present? }
  validates :category_id, exclusion: {in: parents }
  validates :shipping_payer_method_id, exclusion: {in: payers }
end
