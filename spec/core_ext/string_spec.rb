require 'spec_helper'

describe String do
  
  it 'should replace all non alphanumerics with a -' do
    "a 5,k.".slugify.should == "a-5-k"
  end
  
  it 'should ensure that there is not more than 1 - in a row' do
    "a   5.@k".slugify.should == "a-5-k"
  end
  
  it 'should strip all leading and trailing -' do
    "..a 5,k...".slugify.should == "a-5-k"
  end

  
end