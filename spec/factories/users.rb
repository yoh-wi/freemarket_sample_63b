FactoryBot.define do
  factory :user do
    nickname {"hiro"}
    sequence(:email) { |n| "hiro#{n}@example.com"}
    password {"password"}
    last_name_kanji {"田中"}
    first_name_kanji {"ひろ"}
    last_name_kana {"タナカ"}
    first_name_kana {"ヒロ"}
    birthday {"1992-12-12"}
    tel {"09011112222"}
  end
end
