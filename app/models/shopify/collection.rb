class Shopify::Collection
  def self.to_mongo(shopify_shop, shopify_collections) 
    shopify_collections.collect do |shopify_collection|
      c = ::Collection.find_or_create_by_id(shopify_collection.id)
      c.shopify_shop_id = shopify_shop.id
      c.body_html = shopify_collection.body_html
      c.title = shopify_collection.title
      c.template_suffix = shopify_collection.template_suffix
      c.updated_at = shopify_collection.updated_at
      c.sort_order = shopify_collection.sort_order
      c.published_at = shopify_collection.published_at
      c.type = shopify_collection.class.name
      
      c.collects.clear
      shopify_collects = ShopifyAPI::Collect.find(:all, :params => {:collection_id => shopify_collection})
      
      shopify_collects.each do |shopify_collect|  
          collect = c.collects.build(:position => shopify_collect.position,
                           :creatd_at => shopify_collect.created_at,
                           :updated_at => shopify_collect.updated_at,
                           :featured => shopify_collect.featured,
                           :shopify_id => shopify_collect.id,
                           :position => shopify_collect.position,
                           :collection_id => c.id)                
      end
      c.save
      c
    end
  end
end