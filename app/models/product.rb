class Product
  include MongoMapper::Document
  include Slugify
      has_many :variants
      has_many :images
      
      validates_presence_of :title
      
      before_save :slugify
      
      key :product_type, String
      key :handle, String
      key :created_at, Time
      key :body_html, String
      key :title, String
      key :template_suffix, String
      key :updated_at, Time
      key :tags, String
      key :vendor, String
      key :published_at, Time
      key :slug, String
      
      
end

  
 
