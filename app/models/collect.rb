class Collect
  include MongoMapper::EmbeddedDocument

  belongs_to :collection
  
  key :position, Integer
  key :creatd_at, Time
  key :updated_at, Time
  key :featured, Boolean
  key :shopify_id, String
  key :product_id, Integer
  key :collection_id

end