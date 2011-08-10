module CollectionsHelper
  
  def thumb(src)
    return unless src
    src =~ /\.(jpg|jpeg|png|gif)/ 
    src.gsub(".#{$1}", "_thumb." + $1.to_s)
    #puts ">>>>#{$1}"
  end
  
end