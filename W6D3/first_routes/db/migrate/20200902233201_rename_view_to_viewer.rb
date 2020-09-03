class RenameViewToViewer < ActiveRecord::Migration[5.2]
  def change
    rename_column :artwork_shares, :view_id, :viewer_id
  end
end
