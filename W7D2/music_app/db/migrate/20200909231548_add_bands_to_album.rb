class AddBandsToAlbum < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :band, :string
  end
end
