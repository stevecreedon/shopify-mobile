require 'spec_helper'

describe Collection do
  
  before(:each) do
    Collection.delete_all
  end
  
  it 'should create a slug on save' do
    collection = Factory.build(:collection, :title => 'x-y-z')
    collection.slug.should be_nil
    collection.save
    collection.slug.should == 'x-y-z'
  end
  
  it 'should not overwite a slug if the title changes' do
    collection = Factory(:collection, :title => 'x-y-z')
    collection.title = 'a-b-c'
    collection.save
    collection.slug.should == 'x-y-z'
  end
  
  it 'should increment the slug if one exists' do
    c1 = Factory(:collection, :title => 'x-y-z')
    c2 = Factory(:collection, :title => 'x-y-z')
    c2.slug.should == 'x-y-z-1'
  end
 
  
end
