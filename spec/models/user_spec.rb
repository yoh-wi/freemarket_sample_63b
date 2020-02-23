require 'rails_helper'
describe User do
  describe '#create' do
    it "ニックネームがないと登録できない" do
      expect(FactoryBot.build(:user, nickname: "")).to_not be_valid
    end
    it "メールアドレスがないと登録できない" do
      expect(FactoryBot.build(:user, email: "")).to_not be_valid
    end
    it "名前（姓）がないと登録できない" do
      expect(FactoryBot.build(:user, last_name_kanji: "")).to_not be_valid
    end
    it "名前（名）がないと登録できない" do
      expect(FactoryBot.build(:user, first_name_kanji: "")).to_not be_valid
    end
    it "名前カナ（姓）がないと登録できない" do
      expect(FactoryBot.build(:user, last_name_kana: "")).to_not be_valid
    end
    it "名前カナ（名）がないと登録できない" do
      expect(FactoryBot.build(:user, first_name_kana: "")).to_not be_valid
    end
    it "生年月日がないと登録できない" do
      expect(FactoryBot.build(:user, birthday: "")).to_not be_valid
    end
    it "電話番号がないと登録できない" do
      expect(FactoryBot.build(:user, tel: "")).to_not be_valid
    end
    it "メールアドレスが重複していたら登録できない" do 
      user1 = FactoryBot.create(:user, nickname: "taro", email: "taro@example.com")
      expect(FactoryBot.build(:user, nickname: "jiro", email: user1.email)).to_not be_valid
    end
    it "password_confirmationとpasswordが異なる場合保存できない" do 
      expect(FactoryBot.build(:user,password:"password",password_confirmation: "passward")).to_not be_valid 
    end
    it "名前（姓）が全角でなければ登録できない" do
      expect(FactoryBot.build(:user, last_name_kanji: "tanaka")).to_not be_valid
    end
    it "名前（名）が全角でなければ登録できない" do
      expect(FactoryBot.build(:user, first_name_kanji: "hiro")).to_not be_valid
    end
    it "名前カナ（姓）が全角カタカナでなければ登録できない" do
      expect(FactoryBot.build(:user, first_name_kana: "田中")).to_not be_valid
    end
    it "名前カナ（名）が全角カタカナでなければ登録できない" do
      expect(FactoryBot.build(:user, last_name_kana: "ひろ")).to_not be_valid
    end
  end
end