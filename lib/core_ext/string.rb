class String
  
  def slugify
    self.gsub(/[^0-9a-zA-Z]/,"-").squeeze("-").gsub(/^-/,"").gsub(/-$/,"").downcase
  end
end