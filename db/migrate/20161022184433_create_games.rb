#
class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.belongs_to :user, index: true
      t.string :scene, index: true
      t.string :inventory, index: true
      t.integer :score, index: true
      t.integer :time, index: true

      t.timestamps
    end
  end
end
