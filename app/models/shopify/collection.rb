class Shopify::Collection
  def self.to_mongo(shopify_shop, shopify_collections) 
    shopify_collections.collect do |shopify_collection|
      c = ::Collection.find_or_create_by(:id => shopify_collection.id)
      c.shopify_shop_id = shopify_shop.id
      c.body_html = shopify_collection.body_html
      c.title = shopify_collection.title
      c.template_suffix = shopify_collection.template_suffix
      c.updated_at = shopify_collection.updated_at
      c.sort_order = shopify_collection.sort_order
      c.published_at = shopify_collection.published_at
      c.type = shopify_collection.class.name
      
      shopify_collects = ShopifyAPI::Collect.find(:all, :params => {:collection_id => shopify_collection})
      
      shopify_collects.each do |shopify_collect|
          product = Product.find(shopify_collect.product_id)
          collect = Collect.find_or_create_by(:id => shopify_collect.id)
          collect.position = shopify_collect.position
          collect.product_id = shopify_collect.product_id
          collect.featured = shopify_collect.featured
          collect.id = shopify_collect.id
          collect.collection_id = shopify_collect.collection_id
          collect.product_title = product.title
          collect.product_url = product.images.first.try(:[], 'src')
          collect.save
      end
      c.save
      c
    end
  end
end