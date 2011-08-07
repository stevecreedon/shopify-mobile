class ApplicationController < ActionController::Base
  protect_from_forgery
  
  def shop
    Shop.first
  end
  
end
