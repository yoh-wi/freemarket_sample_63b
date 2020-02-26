class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string    :name,      null: false
      t.boolean   :brand_flg, default:false, null: false
      t.timestamps
    end
  end
end
