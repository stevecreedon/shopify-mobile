class Product
  include Mongoid::Document
  include Slugify
      embeds_many :variants
      
      validates_presence_of :title
      
      before_save :slugify
      
      field :product_type, :type => String
      field :handle, :type => String
      field :created_at, :type => Time
      field :body_html, :type => String
      field :title, :type => String
      field :template_suffix, :type => String
      field :updated_at, :type => Time
      field :tags, :type => String
      field :vendor, :type => String
      field :published_at, :type => Time
      field :slug, :type => String
      field :images, :type => Array
      
end

  
 
