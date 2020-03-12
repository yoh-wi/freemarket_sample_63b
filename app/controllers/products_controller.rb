class ProductsController < ApplicationController

  def index
  end

  def new
    @product = Product.new
    @product.images.new
    @parent_category = Category.where(ancestry: nil)
    @payer = ShippingPayerMethod.where(ancestry: nil)
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to root_path
    else
      render :new
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

  private
  def product_params
    params.require(:product).permit(:id, :name, :description, :category_id, :size_id, :brand, :product_condition, :shipping_payer_method_id, :prefecture_id, :days_of_shipping, :price, :trade_status, images_attributes: [:image, :_destroy, :id]).merge(seller_id: current_user.id)
  end
end
