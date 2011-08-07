module ShopOwners
  class CollectionsController < ApplicationController
  
    def update
      collection = Collection.find(params[:id].to_i)
      collection.update_attributes!(params[:collection])
    
      if request.xhr?
        action = collection.mobile ? "published" : "unpublished"
        render :text => "#{collection.title} has been #{action}."
      end
    end
  
  end
end