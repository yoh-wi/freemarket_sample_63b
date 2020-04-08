class ProductsController < ApplicationController

  before_action :set_product, only:[:show, :edit, :update, :destroy, :buy_confirmation, :buy_complete]
  before_action :set_card, only:[:buy_confirmation]

  def index
    @products = Product.where(trade_status: '0').limit(3).order(id: "DESC")
  end

  def show
  end
  
  def new
    unless user_signed_in?
      redirect_to new_user_session_path
    else
      @product = Product.new
      @product.images.new
      @parent_category = Category.where(ancestry: nil)
      @payer = ShippingPayerMethod.where(ancestry: nil)
    end
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to root_path
    else
      @parent_category = Category.where(ancestry: nil)
      @payer = ShippingPayerMethod.where(ancestry: nil)
      @image
      @selected_category = @product.category
      @selected_size = @product.size
      @selected_method = @product.shipping_payer_method
      render :new
    end
  end

  def edit
    @parent_category = Category.where(ancestry: nil)
    @child_category = @product.category.root.children
    @grandchild_category = @product.category.parent.children
    @payer = ShippingPayerMethod.where(ancestry: nil)
    @payer_method = @product.shipping_payer_method.parent.children
    @sizes = @product.category.sizes
    if @product.seller_id != current_user.id
      redirect_back(fallback_location: product_path(@product))
    end
  end

  def update
    if @product.update(product_params)
      redirect_to root_path
    else
      render :edit
    end
  end
  
  def destroy
    if @product.destroy
      flash[:notice] = '商品を削除しました'
      redirect_to user_path
    else
      render :show
    end
  end

  def select_child_category
    @child_category = Category.find(params[:parent_category_id]).children
  end

  def select_grandchild_category
    @grandchild_category = Category.find(params[:child_category_id]).children
  end

  def select_method
    @method = ShippingPayerMethod.find(params[:payer_id]).children
  end

  def select_size
    @sizes = Category.find(params[:grandchild_category_id]).sizes
  end
  
  def buy_confirmation
    if user_signed_in?
      if @product.seller_id == current_user.id
        redirect_back(fallback_location: product_path(@product))
      end
    else
      redirect_to new_user_session_path
    end
  end

  def buy_complete
    card = Card.find_by(user_id: current_user.id)
    Payjp.api_key = Rails.application.credentials.dig(:payjp, :PAYJP_SECRET_KEY)
    charge = Payjp::Charge.create(
      amount: @product.price,
      customer: card.customer_id,
      currency: 'jpy',
      )
    @product.update(buyer_id: current_user.id, trade_status: 1)
  end

  private
  def product_params
    params.require(:product).permit(:name, :description, :category_id, :size_id, :brand, :product_condition, :shipping_payer_method_id, :prefecture_id, :days_of_shipping, :price, :trade_status, images_attributes: [:image, :_destroy, :id]).merge(seller_id: current_user.id)
  end

  def set_product
    @product = Product.find(params[:id])
  end

  def set_card
    card = Card.find_by(user_id: current_user.id)
    Payjp.api_key = Rails.application.credentials.dig(:payjp, :PAYJP_SECRET_KEY)
    customer = Payjp::Customer.retrieve(card.customer_id)
    @default_card_information = customer.cards.retrieve(card.card_id)
  end

end
