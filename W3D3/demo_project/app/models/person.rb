class Person < ApplicationRecord
  validates :name, presence: true

  # create_table :persons do |t|
  #   t.string :name
  #   t.integer :house_id
  # end
  belongs_to :house,
    primary_key: :id,
    foreign_key: :house_id,
    class_name: :House

end
