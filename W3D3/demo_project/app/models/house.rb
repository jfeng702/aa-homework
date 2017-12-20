class House < ApplicationRecord
  validates :address, presence: true

  # def change
  #   create_table :houses do |t|
  #     t.string :address
  #   end
  # end
  has_many :residents,
    primary_key: :id,
    foreign_key: :house_id,
    class_name: :Person

end
