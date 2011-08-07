class Shopify::Product
  
  
  def self.to_mongo(shopify_products)
    
    products = shopify_products.collect do |shopify_product|
        product = ::Product.find_or_create_by_id(shopify_product.id)
        product.product_type = shopify_product.product_type
        product.handle = shopify_product.handle
        product.created_at = shopify_product.created_at
        product.body_html = shopify_product.body_html
        product.title = shopify_product.title
        product.template_suffix = shopify_product.template_suffix
        product.updated_at = shopify_product.updated_at
        product.tags = shopify_product.tags
        product.vendor = shopify_product.vendor
        product.published_at = shopify_product.published_at
        product.variants.clear
        shopify_product.variants.each do |shopify_variant|
          product.variants.build(:position => shopify_variant.position,
               :shopify_id => shopify_variant.id,
               :price => shopify_variant.price,
               :created_at => shopify_variant.created_at,
               :requires_shipping => shopify_variant.requires_shipping,
               :title => shopify_variant.title,
               :inventory_quantity => shopify_variant.inventory_quantity,
               :compare_at_price => shopify_variant.compare_at_price,
               :inventory_policy => shopify_variant.inventory_policy,
               :updated_at => shopify_variant.updated_at,
               :inventory_management => shopify_variant.inventory_management,
               :taxable =>  shopify_variant.taxable,
               :grams => shopify_variant.grams,
               :sku => shopify_variant.sku,
               :fulfillment_service => shopify_variant.fulfillment_service,
               :option1 => shopify_variant.option1,
               :option2 => shopify_variant.option2,
               :option3 => shopify_variant.option3)
        end

        product.images.clear

        shopify_product.images.each do |shopify_image|
          product.images.build(:position => shopify_image.position,
                                :created_at => shopify_image.created_at,
                                :updated_at => shopify_image.updated_at,
                                :src => shopify_image.src)
        end

        product.save
        product
    end
    
   
  end
end