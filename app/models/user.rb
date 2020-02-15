class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  varidates :nickname, :last_name_kanji, :first_name_kanji, :last_name_kana, :first_name_kana, :birthday, :tel, presence: true
end
