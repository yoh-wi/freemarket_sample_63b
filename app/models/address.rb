class Address < ApplicationRecord
  belongs_to :user
  
  validates :last_name_kanji, :first_name_kanji, :last_name_kana, :first_name_kana, :postal_code, :municipality, :house_number, presence: true
  validates :last_name_kanji, :first_name_kanji, format: {with: /\A[ぁ-んァ-ン一-龥]/}
  validates :last_name_kana, :first_name_kana, format: {with: /\A[ァ-ヶー－]+\z/}
end
