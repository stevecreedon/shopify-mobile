class Collection
  include Mongoid::Document
  include Slugify
  
  validates_presence_of :title
  before_save :slugify
  
  field :shopify_shop_id, :type => String
  field :body_html, :type => String
  field :mobile, :type => Boolean
  field :title, :type => String
  field :template_suffix, :type => String
  field :sort_order, :type => Integer
  field :updated_at, :type => Time
  field :published_at, :type => Time
  field :type, :type => String
  field :slug, :type => String
  field :collects, :type => Array
  
  def to_param
    slug
  end
  
end
