class Variant
  include MongoMapper::EmbeddedDocument
      belongs_to :product
      
      key :shopify_id, Integer
      key :position, Integer
      key :price, Float
      key :created_at, Time
      key :requires_shipping, Boolean
      key :title, String
      key :inventory_quantity, Integer
      key :compare_at_price, Float
      key :inventory_policy, String
      key :updated_at, Time
      key :inventory_management, String
      key :taxable, Boolean
      key :grams, Integer
      key :sku, String
      key :option1, String
      key :fulfillment_service, String
      key :option1, String
      key :option2, String
      key :option3, String

end
