class Users::AddressController < ApplicationController
  def new
    @address = Address.new
  end

  def create
    
  end

  def edit
    
  end
  
  def update
    
  end
  
  private
  def address_params
    params.require(:address).permit(:last_name_kanji, :first_name_kanji, :last_name_kana, :first_name_kana, :postal_code, :prefecture_id, :municipality, :house_number, :building_name, :tel).merge(user_id: current_user.id)
  end
end
