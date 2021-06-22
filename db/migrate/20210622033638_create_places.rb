class CreatePlaces < ActiveRecord::Migration[6.1]
  def change
    create_table :places do |t|
      t.text :title
      t.decimal :lat
      t.decimal :lng

      t.timestamps
    end
  end
end
