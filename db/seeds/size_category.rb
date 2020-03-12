ladys_tops = Category.find(2).children.ids
ladys_outer = Category.find(21).children.ids
ladys_pants = Category.find(43).children.ids
ladys_skirt = Category.find(56).children.ids
ladys_one_piece = Category.find(62).children.ids
ladys_pajama = Category.find(78).children.ids
ladys_swim = [174, 175, 176]
ladys_formal = Category.find(178).children.ids
ladys_meternity = Category.find(186).children.ids
mens_tops = Category.find(201).children.ids
mens_outer = Category.find(214).children.ids
mens_pants = Category.find(238).children.ids
mens_suits = Category.find(270).children.ids
mens_swim_underwear = [331, 332, 341, 342]
clothes_size_id = ladys_tops + ladys_outer + ladys_pants + ladys_skirt + ladys_one_piece + ladys_pajama + ladys_swim + ladys_formal + ladys_meternity + mens_tops + mens_outer + mens_pants + mens_suits + mens_swim_underwear

ladys_shoes = Category.find(67).children.ids
mens_shoes = Category.find(248).children.ids
shoes_size_id = ladys_shoes + mens_shoes

baby_girls = Category.find(346).children.ids
baby_boys = Category.find(358).children.ids
babys_both = Category.find(367).children.ids
baby_clothes_size_id = baby_girls + baby_boys + babys_both

kids_girls = Category.find(376).children.ids
kids_boys = Category.find(395).children.ids
kids_both = Category.find(410).children.ids
kids_clothes_size_id = kids_girls + kids_boys + kids_both

kids_shoes_size_id = Category.find(419).children.ids

#clothes
clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 1, category_id: i)
end
clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 2, category_id: i)
end
clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 3, category_id: i)
end
clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 4, category_id: i)
end
clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 5, category_id: i)
end
clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 6, category_id: i)
end
clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 7, category_id: i)
end
clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 8, category_id: i)
end
clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 9, category_id: i)
end
clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 10, category_id: i)
end
#shoes
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 11, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 12, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 13, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 14, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 15, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 16, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 17, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 18, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 19, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 20, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 21, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 22, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 23, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 24, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 25, category_id: i)
end
shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 26, category_id: i)
end

#baby_clothes
baby_clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 27, category_id: i)
end
baby_clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 28, category_id: i)
end
baby_clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 29, category_id: i)
end
baby_clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 30, category_id: i)
end
baby_clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 31, category_id: i)
end

#kids_clothes
kids_clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 32, category_id: i)
end
kids_clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 33, category_id: i)
end
kids_clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 34, category_id: i)
end
kids_clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 35, category_id: i)
end
kids_clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 36, category_id: i)
end
kids_clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 37, category_id: i)
end
kids_clothes_size_id.each do |i|
  SizeCategory.create!(size_id: 38, category_id: i)
end

#kids_shoes
kids_shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 39, category_id: i)
end
kids_shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 40, category_id: i)
end
kids_shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 41, category_id: i)
end
kids_shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 42, category_id: i)
end
kids_shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 43, category_id: i)
end
kids_shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 44, category_id: i)
end
kids_shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 45, category_id: i)
end
kids_shoes_size_id.each do |i|
  SizeCategory.create!(size_id: 46, category_id: i)
end
