class CreateArtworkShares < ActiveRecord::Migration[5.2]
  def change
    create_table :artwork_shares do |t|
      t.integer :artwork_id, null:false
      t.integer :view_id, null:false

      t.timestamps
    end

      add_index :artwork_shares, [:artwork_id, :view_id], unique: true
      add_index :artwork_shares, :artwork_id 
      add_index :artwork_shares, :view_id 
  end
end
