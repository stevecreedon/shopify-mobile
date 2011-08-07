class Collection
  include MongoMapper::Document
  include Slugify
  
  validates_presence_of :title
  before_save :collects_to_mongo, :slugify
  
  key :shopify_shop_id, String
  key :body_html, String
  key :mobile, Boolean
  key :title, String
  key :template_suffix, String
  key :sort_order, Integer
  key :updated_at, Time
  key :published_at, Time
  key :type, String
  key :slug, String
  key :collects, Array
  
  def to_param
    slug
  end
  
  private 
  
  def collects_to_mongo
    self.collects.map! { |c| c.to_mongo } 
  end

end
