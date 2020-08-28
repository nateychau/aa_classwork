class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end

# class AddIndexToDogTable < ActiveRecord::Migration[5.2]
#   def change
#     add_index :dogs, :name { unique: true }
#     # unique true will make every name in column = name, unique 
#   end
# end

