class AddHouseToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :house, :string
  end
end
