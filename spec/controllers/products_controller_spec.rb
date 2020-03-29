require 'rails_helper'

RSpec.describe ProductsController, type: :controller do
  let(:product) { create(:product) }

  describe 'GET #buy_complete' do
    before do
      FactoryBot.build(:product)
    end
    it '商品を購入できる' do
      allow(Payjp::Customer).to receive(:create).and_return(PayjpMock.prepare_customer_information)
      get :buy_complete
      expect(response).to have_http_status(:success)
    end
  end

end