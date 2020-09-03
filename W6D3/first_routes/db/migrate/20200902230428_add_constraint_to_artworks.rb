class AddConstraintToArtworks < ActiveRecord::Migration[5.2]
  def change
    change_column :artworks, :artist_id, :integer, null: false
  end
end
