class ProductsController < ApplicationController

  def index
  end

  def new
    @product = Product.new
  end
  
  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def product_params
    params.require(:product).permit(:name, :description, :category_id, :brand, :product_condition, :shippng_payer_method_id, :prefecture_id, :days_of_shipping, :price, :trade_status).merge(seller_id: current_user.id)
  end
end
