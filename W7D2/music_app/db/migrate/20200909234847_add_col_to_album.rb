class AddColToAlbum < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :is_live?, :boolean
  end
end
