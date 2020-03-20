FactoryBot.define do
  factory :product do
    id                       {1}
    name                     {"帽子"}
    description              {"帽子です"}
    brand                    {"ユニクロ"}
    product_condition        {0}
    prefecture_id            {1}
    days_of_shipping         {0}
    price                    {2000}
    buyer_id                 {}
    trade_status             {0}
    association :seller, factory: :user
    association :shipping_payer_method
    association :category, factory: :category
    association :size, factory: :size
    after(:build) do |product|
      product.images << build(:image, product: product)
    end
  end
end