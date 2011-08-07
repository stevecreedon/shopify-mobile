class Image
  include MongoMapper::EmbeddedDocument
  
  belongs_to :product
  
  key :position, Integer
  key :created_at, Time
  key :updated_at, Time
  key :src, String
 
end
