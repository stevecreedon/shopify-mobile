require 'spec_helper'

describe Product do
  it 'should create a slug on save' do
    product = Factory.build(:product, :title => 'x-y-z')
    product.slug.should be_nil
    product.save
    product.slug.should == 'x-y-z'
  end
  
  it 'should not overwite a slug if the title changes' do
    product = Factory(:product, :title => 'x-y-z')
    product.title = 'a-b-c'
    product.save
    product.slug.should == 'x-y-z'
  end
end
