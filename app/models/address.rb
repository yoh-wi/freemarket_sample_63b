class Address < ApplicationRecord
  belongs_to :user
  
  validates :last_name_kanji, :first_name_kanji, :last_name_kana, :first_name_kana, :postal_code, :prefecture, :municipality, :house_number, presence: true
  validates :last_name_kanji, :first_name_kanji, format: {with: /\A[ぁ-んァ-ン一-龥]/}
  validates :last_name_kana, :first_name_kana, format: {with: /\A[ァ-ヶー－]+\z/}
  validates :postal_code, numericality: true, length: { is: 7 } 

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :prefecture
end
