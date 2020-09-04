class RemoveColorColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :fav_color
  end
end
