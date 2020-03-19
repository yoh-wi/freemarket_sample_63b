FactoryBot.define do
  factory :category do
    id   {1}
    name {'スカート'}

    after(:build) do |category|
      size = build(:size)
      category.size_categories << build(:size_category, size: size, category: category)
      category.sizes << [size]
    end
  end
end