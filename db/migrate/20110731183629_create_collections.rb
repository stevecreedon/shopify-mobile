class CreateCollections < ActiveRecord::Migration
  def self.up
    create_table :collections do |t|
      t.integer :id
      t.string :title
      t.string :type
      t.boolean :mobile
      t.timestamps
    end
  end

  def self.down
    drop_table :collections
  end
end
