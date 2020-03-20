FactoryBot.define do
  factory :image do
    id    {1}
    image {Rack::Test::UploadedFile.new(File.join(Rails.root, 'app/assets/images/logo-white.png'))}
    association :product, factory: :product
  end
end