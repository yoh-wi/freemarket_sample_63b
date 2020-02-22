class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.string     :last_name_kanji,  null: false
      t.string     :first_name_kanji, null: false
      t.string     :last_name_kana,   null: false
      t.string     :first_name_kana,  null: false
      t.string     :postal_code,      null: false, limit: 7
      t.integer    :prefecture_id,    null: false, foreign_key: true
      t.string     :municipality,     null: false
      t.string     :house_number,     null: false
      t.string     :building_name
      t.string     :tel
      t.references :user,             null: false, foreign_key: true
      t.timestamps
    end
  end
end
