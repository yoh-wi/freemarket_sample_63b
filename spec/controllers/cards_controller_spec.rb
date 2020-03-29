require 'rails_helper'

RSpec.describe CardsController, type: :controller do

  let(:user) { create(:user) }
  let(:card) { create(:card, user_id: user.id) }

  describe 'GET #create' do
    context 'log in' do
      before do
        login user
      end
      it 'クレジットカードを登録できる' do
        allow(Payjp::Customer).to receive(:create).and_return(PayjpMock.prepare_customer_information)
        get :new
        expect(response).to have_http_status(:success)
      end
    end
  end

  describe 'GET #index' do
    context 'log in' do
      before do
        login user
      end
      it '登録したクレジットカードが表示できる' do
        allow(Payjp::Customer).to receive(:create).and_return(PayjpMock.prepare_customer_information)
        expect(response).to have_http_status(:success)
      end
    end
  end

end