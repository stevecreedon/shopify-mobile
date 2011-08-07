class ShopController < ApplicationController
  
  layout 'mobile'
  
  def index
    @shop = shop
    @collections = Collection.find_all_by_shopify_shop_id(@shop.id.to_s)
  end
  
end