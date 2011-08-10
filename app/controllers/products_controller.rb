class ProductsController < ApplicationController
  
  layout 'mobile'
  
  def show
    @product = Product.find_by_slug(params[:id])
  end
  
end
  