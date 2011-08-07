module ShopOwners
  class HomeController < ApplicationController
  
    around_filter :shopify_session, :except => 'welcome'
  
    def welcome
      current_host = "#{request.host}#{':' + request.port.to_s if request.port != 80}"
      @callback_url = "http://#{current_host}/login/finalize"
    end
  
    def index
      @shop = ShopifyAPI::Shop.current
      Shopify::Shop.to_mongo(@shop)
      @custom_collections = Shopify::Collection.to_mongo(@shop, ShopifyAPI::CustomCollection.find(:all)) 
      @smart_collections = Shopify::Collection.to_mongo(@shop, ShopifyAPI::SmartCollection.find(:all))
      @products = Shopify::Product.to_mongo(ShopifyAPI::Product.find(:all))
    end
  
  end
end