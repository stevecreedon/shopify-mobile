class Shopify::Shop
  
  def self.to_mongo(shopify_shop)
    shop = ::Shop.find_or_create_by_id(shopify_shop.id, :domain => shopify_shop.domain)
    shop
  end
  
end