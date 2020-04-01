require 'rails_helper'
describe Product do
  before do
    FactoryBot.build(:user)
    FactoryBot.build(:shipping_payer_method)
    FactoryBot.build(:category)
    FactoryBot.build(:size_category)
    FactoryBot.build(:product)
  end
  describe '#create' do
    it "商品名がないと出品できない" do
      expect(FactoryBot.build(:product, name: "")).to_not be_valid
    end
    it "商品の説明がないと出品できない" do
      expect(FactoryBot.build(:product, description: "")).to_not be_valid
    end
    it "カテゴリがサイズを持つ場合、サイズがないと出品できない" do
      expect(FactoryBot.build(:product, size_id: "")).to_not be_valid
    end
    it "出品元がないと出品できない" do
      expect(FactoryBot.build(:product, prefecture_id: "")).to_not be_valid
    end
    it "出品元がないと出品できない" do
      expect(FactoryBot.build(:product, prefecture_id: "")).to_not be_valid
    end
    it "配送方法がないと出品できない" do
      expect(FactoryBot.build(:product, shipping_payer_method_id: "")).to_not be_valid
    end
    it "価格がないと出品できない" do
      expect(FactoryBot.build(:product, price: "")).to_not be_valid
    end
    it "配送までの日数がないと出品できない" do
      expect(FactoryBot.build(:product, days_of_shipping: "")).to_not be_valid
    end
  end

  describe '#update' do
    it "商品名がないと出品できない" do
      expect(FactoryBot.build(:product, name: "")).to_not be_valid
    end
    it "商品の説明がないと出品できない" do
      expect(FactoryBot.build(:product, description: "")).to_not be_valid
    end
    it "カテゴリがサイズを持つ場合、サイズがないと出品できない" do
      expect(FactoryBot.build(:product, size_id: "")).to_not be_valid
    end
    it "出品元がないと出品できない" do
      expect(FactoryBot.build(:product, prefecture_id: "")).to_not be_valid
    end
    it "出品元がないと出品できない" do
      expect(FactoryBot.build(:product, prefecture_id: "")).to_not be_valid
    end
    it "配送方法がないと出品できない" do
      expect(FactoryBot.build(:product, shipping_payer_method_id: "")).to_not be_valid
    end
    it "価格がないと出品できない" do
      expect(FactoryBot.build(:product, price: "")).to_not be_valid
    end
    it "配送までの日数がないと出品できない" do
      expect(FactoryBot.build(:product, days_of_shipping: "")).to_not be_valid
    end
  end
end