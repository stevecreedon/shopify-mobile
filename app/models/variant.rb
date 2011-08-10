class Variant
  include Mongoid::Document
      embedded_in :product
      
      field :shopify_id, :type => Integer
      field :position, :type => Integer
      field :price, :type => Float
      field :created_at, :type => Time
      field :requires_shipping, :type => Boolean
      field :title, :type => String
      field :inventory_quantity, :type => Integer
      field :compare_at_price, :type => Float
      field :inventory_policy, :type => String
      field :updated_at, :type => Time
      field :inventory_management, :type => String
      field :taxable, :type => Boolean
      field :grams, :type => Integer
      field :sku, :type => String
      field :option1, :type => String
      field :fulfillment_service, :type => String
      field :option1, :type => String
      field :option2, :type => String
      field :option3, :type => String

end
