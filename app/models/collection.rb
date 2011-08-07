class Collection
  include MongoMapper::Document
  
  before_save :slugify
  
  many :collects

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
  
  
  def to_param
    slug
  end

  private 
  
  def slugify
    return if self.slug
    self.slug = self.title.slugify if self.title
  end

end
