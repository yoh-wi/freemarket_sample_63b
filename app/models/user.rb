class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :nickname, :last_name_kanji, :first_name_kanji, :last_name_kana, :first_name_kana, :birthday, :tel, presence: true
  validates :last_name_kanji, :first_name_kanji, format: {with: /\A[ぁ-んァ-ン一-龥]/}
  validates :last_name_kana, :first_name_kana, format: {with: /\A[ァ-ヶー－]+\z/}
end
