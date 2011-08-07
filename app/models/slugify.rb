module Slugify
  
  protected

  def slugify
    return if self.slug
    
    count = 0
  
    begin
      self.slug = self.title.slugify + ((count == 0) ? "" : "-#{count.to_s}")
      count += 1
    end while handle_exists?(self.slug)
  end
  
  def handle_exists?(slug)
    !self.class.find_by_slug(slug).nil?
  end
  
end