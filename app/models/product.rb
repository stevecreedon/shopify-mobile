class Product
  include MongoMapper::Document
      has_many :variants
      has_many :images
      
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
      
      private 

      def slugify
        return if self.slug
        self.slug = self.title.slugify if self.title
      end
end

  
 
