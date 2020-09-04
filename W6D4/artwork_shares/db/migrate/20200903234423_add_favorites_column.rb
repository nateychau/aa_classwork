class AddFavoritesColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :artworks, :favorited, :boolean
    add_column :artwork_shares, :favorited, :boolean
  end
end
