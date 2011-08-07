class CollectionsController < ApplicationController
  
  def show
    @collection = Collection.find_by_slug(params[:id])
  end
  
end