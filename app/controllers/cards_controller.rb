class CardsController < ApplicationController
  
  # require "payjp"
  # before_action :set_card
  Payjp.api_key = Rails.application.credentials.dig(:payjp, :PAYJP_SECRET_KEY)

  def new
    @card = Card.new
    # card = Card.where(user: current_user).first
    # redirect_to action: :index if card.present?
  end

  def create
    Payjp.api_key = Rails.application.credentials.dig(:payjp, :PAYJP_SECRET_KEY)

    customer = Payjp::Customer.create(
      email: current_user.email,
      card: params[:card_token],
      metadata: {user_id: current_user.id}
    )

    @card = Card.new(user_id: current_user.id, customer_id: customer.id, card_id: customer.default_card)
    binding.pry
    @card.save
    redirect_to 
    # if params[:card_token]
    #   # binding.pry
    #   redirect_to action: :new
    # else
    #   customer = Payjp::Customer.create(
    #     email: current_user.email,
    #     card: params[:card_token],
    #   )
    #   if @card.save
    #     redirect_to action: :show
    #   else
    #     redirect_to action: :new
    #   end
    # end
  end

  def delete
  end

  def show
    card = Card.where(user_id: current_user.id).first
    if card.blank?
      redirect_to action: "new"
    else
      Payjp.api_key = ENV["PAYJP_ACCESS_KEY"]
      customer = Payjp::Customer.retrieve(card.customer_id)
      @default_card_information = customer.cards.retrieve(card.card_id)
    end
  end

  private

  # def set_card
  #   @card = Card.where(user_id: current_user.id).first if Card.where(user_id: current_user.id).present?
  # end

end
