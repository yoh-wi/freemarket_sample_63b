require 'rails_helper'

RSpec.describe CardsController, type: :controller do

  describe 'GET #index' do
    before do
      FactoryBot.build(:user)
      FactoryBot.build(:card)
    end
  
    it 'returns http success' do
      get :index
      expect(response).to have_http_status(:success)
    end
  end
  
  describe 'GET #create' do
    it 'returns http success' do
      get :new
      expect(response).to have_http_status(:success)
    end
  end


end