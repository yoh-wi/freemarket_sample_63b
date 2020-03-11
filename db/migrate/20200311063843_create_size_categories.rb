class CreateSizeCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :size_categories do |t|
      t.references :size, foreign_key: true
      t.references :category, foreign_key: true
      t.timestamps
    end
  end
end
